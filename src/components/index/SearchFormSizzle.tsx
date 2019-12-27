import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

interface State {
  keyword: string;
  sizzle_word: string;
}

class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keyword: "", sizzle_word: "飽きのこない" };
    this.textChange = this.textChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="dish_name">
            <h3>キーワード</h3>
          </Form.Label>
          <Form.Control
            as="input"
            type="text"
            name={"dish"}
            id={"dish_name"}
            className={"mb-3"}
            value={this.state.keyword}
            onChange={this.textChange}
            placeholder="キーワードを入力"
          />
          <Form.Label htmlFor="texture_name">
            <h3>シズルワード</h3>
          </Form.Label>
          <Form.Control
            as="select"
            name={"sizzle_word"}
            id={"sizzle_word"}
            value={this.state.sizzle_word}
            onChange={this.selectChange}
          >
            <option value={"飽きのこない"}>飽きのこない</option>
            <option value={"味わい深い"}>味わい深い</option>
            <option value={"あっさり"}>あっさり</option>
            <option value={"後味がすっきり"}>後味がすっきり</option>
            <option value={"後味がよい"}>後味がよい</option>
            <option value={"後を引く"}>後を引く</option>
            <option value={"脂っこい"}>脂っこい</option>
            <option value={"脂の乗った"}>脂の乗った</option>
            <option value={"甘い"}>甘い</option>
            <option value={"甘い香り"}>甘い香り</option>
            <option value={"甘辛い"}>甘辛い</option>
            <option value={"甘さ控えめ"}>甘さ控えめ</option>
            <option value={"甘じょっぱい"}>甘じょっぱい</option>
            <option value={"甘酸っぱい"}>甘酸っぱい</option>
            <option value={"甘みがある"}>甘みがある</option>
            <option value={"薄味"}>薄味</option>
            <option value={"うす塩"}>うす塩</option>
            <option value={"旨辛"}>旨辛</option>
            <option value={"うまみのある"}>うまみのある</option>
            <option value={"香る"}>香る</option>
            <option value={"辛い"}>辛い</option>
            <option value={"芳しい"}>芳しい</option>
            <option value={"甘露"}>甘露</option>
            <option value={"凝縮した"}>凝縮した</option>
            <option value={"キレがある"}>キレがある</option>
            <option value={"クセになる"}>クセになる</option>
            <option value={"クセのない"}>クセのない</option>
            <option value={"口に広がる"}>口に広がる</option>
            <option value={"クリーミー"}>クリーミー</option>
            <option value={"激辛"}>激辛</option>
            <option value={"濃い味"}>濃い味</option>
            <option value={"香ばしい"}>香ばしい</option>
            <option value={"香味"}>香味</option>
            <option value={"極旨"}>極旨</option>
            <option value={"コクがある"}>コクがある</option>
            <option value={"コク旨"}>コク旨</option>
            <option value={"コク深い"}>コク深い</option>
            <option value={"こっくり"}>こっくり</option>
            <option value={"こってり"}>こってり</option>
            <option value={"さっぱり"}>さっぱり</option>
            <option value={"サワー"}>サワー</option>
            <option value={"さわやかな"}>さわやかな</option>
            <option value={"酸味がある"}>酸味がある</option>
            <option value={"塩辛い"}>塩辛い</option>
            <option value={"渋い"}>渋い</option>
            <option value={"しょっぱい"}>しょっぱい</option>
            <option value={"シンプルな"}>シンプルな</option>
            <option value={"スイート"}>スイート</option>
            <option value={"すっきり"}>すっきり</option>
            <option value={"酸っぱい"}>酸っぱい</option>
            <option value={"すっぱ辛い"}>すっぱ辛い</option>
            <option value={"スパイシー"}>スパイシー</option>
            <option value={"スモーキー"}>スモーキー</option>
            <option value={"繊細な"}>繊細な</option>
            <option value={"ソルティ"}>ソルティ</option>
            <option value={"淡白"}>淡白</option>
            <option value={"超甘"}>超甘</option>
            <option value={"激辛"}>激辛</option>
            <option value={"超すっぱい"}>超すっぱい</option>
            <option value={"つゆだく"}>つゆだく</option>
            <option value={"デリシャス"}>デリシャス</option>
            <option value={"徳濃"}>徳濃</option>
            <option value={"にがい"}>にがい</option>
            <option value={"濃厚な"}>濃厚な</option>
            <option value={"濃密な"}>濃密な</option>
            <option value={"鼻に抜けるような"}>鼻に抜けるような</option>
            <option value={"華やかな"}>華やかな</option>
            <option value={"ビター"}>ビター</option>
            <option value={"美味"}>美味</option>
            <option value={"ピリッと"}>ピリッと</option>
            <option value={"ピリ辛"}>ピリ辛</option>
            <option value={"風味豊かな"}>風味豊かな</option>
            <option value={"深みのある"}>深みのある</option>
            <option value={"複雑な"}>複雑な</option>
            <option value={"ふくよかな"}>ふくよかな</option>
            <option value={"フルーティ"}>フルーティ</option>
            <option value={"芳醇な"}>芳醇な</option>
            <option value={"ほのかな"}>ほのかな</option>
            <option value={"ほろ苦い"}>ほろ苦い</option>
            <option value={"ほんのりした"}>ほんのりした</option>
            <option value={"ほんのり甘い"}>ほんのり甘い</option>
            <option value={"マイルド"}>マイルド</option>
            <option value={"まったり"}>まったり</option>
            <option value={"まろやかな"}>まろやかな</option>
            <option value={"みずみずしい"}>みずみずしい</option>
            <option value={"やさしい"}>やさしい</option>
            <option value={"病みつきになる"}>病みつきになる</option>
            <option value={"余韻のある"}>余韻のある</option>
            <option value={"よくしみた"}>よくしみた</option>
            <option value={"リッチな"}>リッチな</option>
            <option value={"揚げたて"}>揚げたて</option>
            <option value={"朝採り"}>朝採り</option>
            <option value={"あぶり"}>あぶり</option>
            <option value={"あらぎり"}>あらぎり</option>
            <option value={"一流の"}>一流の</option>
            <option value={"遺伝子組換不使用"}>遺伝子組換不使用</option>
            <option value={"田舎の味"}>田舎の味</option>
            <option value={"癒しの"}>癒しの</option>
            <option value={"淹れたて"}>淹れたて</option>
            <option value={"彩がよい"}>彩がよい</option>
            <option value={"栄養たっぷり"}>栄養たっぷり</option>
            <option value={"オーガニック"}>オーガニック</option>
            <option value={"大盛り"}>大盛り</option>
            <option value={"おしゃれな"}>おしゃれな</option>
            <option value={"男の"}>男の</option>
            <option value={"大人の"}>大人の</option>
            <option value={"おふくろの味"}>おふくろの味</option>
            <option value={"おもてなし"}>おもてなし</option>
            <option value={"隠し味"}>隠し味</option>
            <option value={"ガツガツ"}>ガツガツ</option>
            <option value={"がっつり"}>がっつり</option>
            <option value={"体にやさしい"}>体にやさしい</option>
            <option value={"カロリーオフ"}>カロリーオフ</option>
            <option value={"カロリーゼロ"}>カロリーゼロ</option>
            <option value={"かわいい"}>かわいい</option>
            <option value={"完熟の"}>完熟の</option>
            <option value={"季節限定"}>季節限定</option>
            <option value={"ギュギュっと"}>ギュギュっと</option>
            <option value={"ギュッと"}>ギュッと</option>
            <option value={"行列のできる"}>行列のできる</option>
            <option value={"具だくさん"}>具だくさん</option>
            <option value={"グルメ"}>グルメ</option>
            <option value={"減塩"}>減塩</option>
            <option value={"厳選素材"}>厳選素材</option>
            <option value={"高級感"}>高級感</option>
            <option value={"香料不使用"}>香料不使用</option>
            <option value={"こだわりの"}>こだわりの</option>
            <option value={"ごちそう"}>ごちそう</option>
            <option value={"コトコト"}>コトコト</option>
            <option value={"こんがり"}>こんがり</option>
            <option value={"砂糖不使用"}>砂糖不使用</option>
            <option value={"産地限定"}>産地限定</option>
            <option value={"産地直送"}>産地直送</option>
            <option value={"幸せの"}>幸せの</option>
            <option value={"自家製の"}>自家製の</option>
            <option value={"自然の"}>自然の</option>
            <option value={"じっくり"}>じっくり</option>
            <option value={"老舗"}>老舗</option>
            <option value={"自分へのご褒美"}>自分へのご褒美</option>
            <option value={"自慢の"}>自慢の</option>
            <option value={"しみ込んだ"}>しみ込んだ</option>
            <option value={"シュガーレス"}>シュガーレス</option>
            <option value={"熟成した"}>熟成した</option>
            <option value={"旬"}>旬</option>
            <option value={"上質な"}>上質な</option>
            <option value={"上品な"}>上品な</option>
            <option value={"新鮮な"}>新鮮な</option>
            <option value={"贅沢な"}>贅沢な</option>
            <option value={"絶品"}>絶品</option>
            <option value={"絶妙な"}>絶妙な</option>
            <option value={"素材の"}>素材の</option>
            <option value={"素朴な"}>素朴な</option>
            <option value={"炊きたて"}>炊きたて</option>
            <option value={"たっぷり"}>たっぷり</option>
            <option value={"食べ応えのある"}>食べ応えのある</option>
            <option value={"食べごろ"}>食べごろ</option>
            <option value={"着色料不使用"}>着色料不使用</option>
            <option value={"低塩"}>低塩</option>
            <option value={"低カロリーの"}>低カロリーの</option>
            <option value={"定番の"}>定番の</option>
            <option value={"出来立て"}>出来立て</option>
            <option value={"手作り"}>手作り</option>
            <option value={"伝統の"}>伝統の</option>
            <option value={"天然の"}>天然の</option>
            <option value={"糖質ゼロ"}>糖質ゼロ</option>
            <option value={"特選"}>特選</option>
            <option value={"独特の"}>独特の</option>
            <option value={"とっておき"}>とっておき</option>
            <option value={"採れたて"}>採れたて</option>
            <option value={"ナチュラル"}>ナチュラル</option>
            <option value={"懐かしい"}>懐かしい</option>
            <option value={"生の"}>生の</option>
            <option value={"濃縮"}>濃縮</option>
            <option value={"ノンオイル"}>ノンオイル</option>
            <option value={"ノンシュガー"}>ノンシュガー</option>
            <option value={"パクパク"}>パクパク</option>
            <option value={"秘伝の"}>秘伝の</option>
            <option value={"100%"}>100%</option>
            <option value={"不思議"}>不思議</option>
            <option value={"ぶっかけ"}>ぶっかけ</option>
            <option value={"フレッシュな"}>フレッシュな</option>
            <option value={"プレミアム"}>プレミアム</option>
            <option value={"ヘルシー"}>ヘルシー</option>
            <option value={"ほっとする"}>ほっとする</option>
            <option value={"ボリュームのある"}>ボリュームのある</option>
            <option value={"本格派"}>本格派</option>
            <option value={"本場の"}>本場の</option>
            <option value={"本来の"}>本来の</option>
            <option value={"幻の"}>幻の</option>
            <option value={"まるごと"}>まるごと</option>
            <option value={"満足感"}>満足感</option>
            <option value={"見栄えのよい"}>見栄えのよい</option>
            <option value={"昔ながらの"}>昔ながらの</option>
            <option value={"蒸したて"}>蒸したて</option>
            <option value={"無添加"}>無添加</option>
            <option value={"無農薬"}>無農薬</option>
            <option value={"もぎたて"}>もぎたて</option>
            <option value={"焼きたて"}>焼きたて</option>
            <option value={"有機栽培"}>有機栽培</option>
            <option value={"選りすぐり"}>選りすぐり</option>
            <option value={"忘れられない"}>忘れられない</option>
            <option value={"話題の"}>話題の</option>
            <option value={"和風"}>和風</option>
            <option value={"あたたか"}>あたたか</option>
            <option value={"あつあつ"}>あつあつ</option>
            <option value={"硬い"}>硬い</option>
            <option value={"噛み心地のよい"}>噛み心地のよい</option>
            <option value={"噛みごたえのある"}>噛みごたえのある</option>
            <option value={"からっと"}>からっと</option>
            <option value={"カリカリ"}>カリカリ</option>
            <option value={"ガリガリ"}>ガリガリ</option>
            <option value={"カリッと"}>カリッと</option>
            <option value={"ガリっと"}>ガリっと</option>
            <option value={"軽い"}>軽い</option>
            <option value={"キーン"}>キーン</option>
            <option value={"キンキン"}>キンキン</option>
            <option value={"グイグイ"}>グイグイ</option>
            <option value={"口当たりがよい"}>口当たりがよい</option>
            <option value={"口どけのよい"}>口どけのよい</option>
            <option value={"クリスピー"}>クリスピー</option>
            <option value={"ゴクゴク"}>ゴクゴク</option>
            <option value={"コシのある"}>コシのある</option>
            <option value={"ゴツゴツ"}>ゴツゴツ</option>
            <option value={"こりこり"}>こりこり</option>
            <option value={"コリっと"}>コリっと</option>
            <option value={"サクサク"}>サクサク</option>
            <option value={"ザクザク"}>ザクザク</option>
            <option value={"サクッと"}>サクッと</option>
            <option value={"ザクッと"}>ザクッと</option>
            <option value={"サクフワ"}>サクフワ</option>
            <option value={"さっくり"}>さっくり</option>
            <option value={"ざっくり"}>ざっくり</option>
            <option value={"サラサラ"}>サラサラ</option>
            <option value={"ザラザラ"}>ザラザラ</option>
            <option value={"しこしこ"}>しこしこ</option>
            <option value={"舌触りのよい"}>舌触りのよい</option>
            <option value={"しっとり"}>しっとり</option>
            <option value={"シャキシャキ"}>シャキシャキ</option>
            <option value={"しゃきっと"}>しゃきっと</option>
            <option value={"シャリシャリ"}>シャリシャリ</option>
            <option value={"ジャリジャリ"}>ジャリジャリ</option>
            <option value={"ジューシー"}>ジューシー</option>
            <option value={"じゅわー"}>じゅわー</option>
            <option value={"シュワシュワ"}>シュワシュワ</option>
            <option value={"シュワっと"}>シュワっと</option>
            <option value={"じゅわっと"}>じゅわっと</option>
            <option value={"新食感"}>新食感</option>
            <option value={"しんなり"}>しんなり</option>
            <option value={"スースー"}>スースー</option>
            <option value={"弾力がある"}>弾力がある</option>
            <option value={"チュルン"}>チュルン</option>
            <option value={"つぶつぶ"}>つぶつぶ</option>
            <option value={"つるっと"}>つるっと</option>
            <option value={"つるつる"}>つるつる</option>
            <option value={"つるり"}>つるり</option>
            <option value={"つるん"}>つるん</option>
            <option value={"ドローリ"}>ドローリ</option>
            <option value={"とろける"}>とろける</option>
            <option value={"トロッと"}>トロッと</option>
            <option value={"とろとろ"}>とろとろ</option>
            <option value={"ドロドロ"}>ドロドロ</option>
            <option value={"とろーり"}>とろーり</option>
            <option value={"ドロリ"}>ドロリ</option>
            <option value={"なめらかな"}>なめらかな</option>
            <option value={"ねっとり"}>ねっとり</option>
            <option value={"ねばねば"}>ねばねば</option>
            <option value={"のどごし"}>のどごし</option>
            <option value={"歯ごたえのある"}>歯ごたえのある</option>
            <option value={"歯ざわりのよい"}>歯ざわりのよい</option>
            <option value={"はじける"}>はじける</option>
            <option value={"パラパラ"}>パラパラ</option>
            <option value={"パリッと"}>パリッと</option>
            <option value={"パリパリ"}>パリパリ</option>
            <option value={"冷え冷え"}>冷え冷え</option>
            <option value={"冷やし"}>冷やし</option>
            <option value={"ヒリヒリ"}>ヒリヒリ</option>
            <option value={"ピリピリ"}>ピリピリ</option>
            <option value={"ひんやり"}>ひんやり</option>
            <option value={"ふかふか"}>ふかふか</option>
            <option value={"プチプチ"}>プチプチ</option>
            <option value={"ふっくら"}>ふっくら</option>
            <option value={"プツプツ"}>プツプツ</option>
            <option value={"プニプニ"}>プニプニ</option>
            <option value={"プリッと"}>プリッと</option>
            <option value={"プリプリ"}>プリプリ</option>
            <option value={"ふるふる"}>ふるふる</option>
            <option value={"ぷるぷる"}>ぷるぷる</option>
            <option value={"ぷるるん"}>ぷるるん</option>
            <option value={"ぷるん"}>ぷるん</option>
            <option value={"フワッと"}>フワッと</option>
            <option value={"フワトロ"}>フワトロ</option>
            <option value={"ふわふわ"}>ふわふわ</option>
            <option value={"ふんわり"}>ふんわり</option>
            <option value={"ほかほか"}>ほかほか</option>
            <option value={"ポキポキ"}>ポキポキ</option>
            <option value={"ほくほく"}>ほくほく</option>
            <option value={"ほっくり"}>ほっくり</option>
            <option value={"ほっこり"}>ほっこり</option>
            <option value={"ほろほろ"}>ほろほろ</option>
            <option value={"ポロポロ"}>ポロポロ</option>
            <option value={"ムチムチ"}>ムチムチ</option>
            <option value={"もちっと"}>もちっと</option>
            <option value={"もちもち"}>もちもち</option>
            <option value={"もっちり"}>もっちり</option>
            <option value={"やわらかい"}>やわらかい</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  private textChange(event: React.FormEvent) {
    const newValue: string = (event.target as HTMLInputElement).value;
    this.setState({ keyword: newValue });
  }

  private selectChange(event: React.FormEvent) {
    const newValue: string = (event.target as HTMLSelectElement).value;
    this.setState({ sizzle_word: newValue });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = this.state.keyword;
    const sizzle_word = this.state.sizzle_word;
    const url = `/result_sizzle/${keyword}/${sizzle_word}/0`;

    this.props.history.push(url);
  }
}

export default withRouter(SearchForm);
