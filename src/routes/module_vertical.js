const cloud = require('d3-cloud'),
	d3 = require('d3'),
	jquery = require('jquery'),
	Canvas = require('canvas'),
	texture_dic = require('./texture_dic'),
	random = d3.randomIrwinHall(2),
	colorScale = d3.scaleOrdinal(d3.schemeCategory10);

const W = 310;
const H = 310;

class WordCloud {
	constructor(data_array, json_data, document) {
		const recipe_title = json_data['title'];
		const description = json_data['description'];
		const advice = json_data['advice'];
		const countMax = d3.max(d3.values(data_array));
		const sizeScale = d3
			.scaleSqrt()
			.domain([0, countMax.count])
			.range([10, 35]);
		const words = data_array.map(function(d) {
			d.texture =
				d.texture +
				`<tspan x="0em" y="${sizeScale(d.count)}">` +
				texture_dic[d.texture] +
				'</tspan>';
			// d.texture + '<tbreak/>' + texture_dic[d.texture] + '<tbreak/>';
			return {
				text: d.texture,
				count: d.count,
				size: sizeScale(d.count),
			};
		});

		this.layout = cloud()
			.size([W, H])
			.words(words)
			.padding(5)
			.rotate(function() {
				return Math.round(1 - random()) * 1;
			})
			.font('Arial')
			.fontSize(function(d) {
				return d.size;
			})
			.canvas(function() {
				return Canvas.createCanvas(1, 1);
			})
			.spiral('archimedean')
			.random(function() {
				return 0.5;
			})
			.on('end', draw);

		function draw(words) {
			const body = d3.select(document.body);
			const recipe_box = body
				.append('div')
				.classed('recipe_box', true)
				.classed('card', true)
				.append('div')
				.classed('card-body alert-warning', true)
				.classed('rounded', true);

			const recipe_box_header = recipe_box
				.append('div')
				.classed('recipe_box_header', true);

			recipe_box_header
				.append('input')
				.attr('type', 'checkbox')
				.attr('value', recipe_title)
				.style('float', 'left')
				.style('margin-top', '8px')
				.style('margin-right', '15px');

			recipe_box_header
				.append('h3')
				.style('padding-left', '10px')
				.classed('recipe_title', true)
				.classed('card-title', true)
				.style('font-weight', 'bold')
				.text(recipe_title);

			const recipe_box_content = recipe_box
				.append('div')
				.classed('container-fluid', true)
				.append('div')
				.classed('row', true);

			const recipe_box_content_left = recipe_box_content
				.append('div')
				.classed('col-sm-8 col-sm-left', true);

			const svg_jp = recipe_box_content_left
				.append('svg')
				.classed('float-left', true)
				.attr('id', 'wordcloud_jp');

			svg_jp
				.append('circle')
				.attr('cx', H / 2)
				.attr('cy', W / 2)
				.attr('r', 154)
				.attr('fill', 'lemonchiffon')
				.attr('stroke-width', 3)
				.attr('stroke', 'wheat');

			svg_jp
				.attr('width', W)
				.attr('height', H)
				.append('g')
				.attr('transform', 'translate(' + H / 2 + ',' + W / 2 + ')')
				.selectAll('text')
				.data(words)
				.enter()
				.append('text')
				.attr('text-anchor', 'middle')
				.style('font-size', function(d) {
					return d.size + 'px';
				})
				.style('font-family', 'Arial')
				.style('fill', function(d, i) {
					return colorScale(i);
				})
				.attr('text-anchor', 'middle')
				.attr('transform', function(d) {
					return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
				})
				.text(function(d) {
					return d.text;
				});

			const svg_en = recipe_box_content_left
				.append('svg')
				.classed('float-left', true)
				.classed('ml-3', true)
				.attr('id', 'wordcloud_en');

			svg_en
				.append('circle')
				.attr('cx', H / 2)
				.attr('cy', W / 2)
				.attr('r', 154)
				.attr('fill', 'lemonchiffon')
				.attr('stroke-width', 3)
				.attr('stroke', 'wheat');

			svg_en
				.attr('width', W)
				.attr('height', H)
				.append('g')
				.attr('transform', 'translate(' + H / 2 + ',' + W / 2 + ')')
				.selectAll('text')
				.data(words)
				.enter()
				.append('text')
				.attr('text-anchor', 'middle')
				.style('font-size', function(d) {
					return d.size + 'px';
				})
				.style('font-family', 'Arial')
				.style('fill', function(d, i) {
					return colorScale(i);
				})
				.attr('text-anchor', 'middle')
				.attr('transform', function(d) {
					return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
				})
				.text(function(d) {
					return d.text;
				});

			const recipe_box_content_right = recipe_box_content
				.append('div')
				.classed('col-sm-4 col-sm-right', true);

			// add recipe_description
			recipe_box_content_right
				.append('p')
				.text('Description')
				.classed('card-text', true)
				.style('font-weight', 'bold')
				.append('p')
				.classed('description', true)
				.classed('card-text', true)
				.text(description);

			recipe_box_content_right
				.append('p')
				.text('Advice')
				.classed('card-text', true)
				.style('font-weight', 'bold')
				.append('p')
				.classed('advice', true)
				.classed('card-text', true)
				.text(advice);
		}
	}
}

module.exports = WordCloud;
