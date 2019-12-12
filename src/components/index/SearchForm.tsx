import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

interface State {
  keyword: string;
  texture: string;
}

class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keyword: "", texture: "" };
    this.textChange = this.textChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="dish_name">
            <h3>Dish Name</h3>
          </Form.Label>
          <Form.Control
            as="input"
            type="text"
            name={"dish"}
            id={"dish_name"}
            value={this.state.keyword}
            onChange={this.textChange}
            placeholder="料理名を入力"
          />
          <Form.Label htmlFor="texture_name">
            <h3>Food Texture</h3>
          </Form.Label>
          <Form.Control
            as="select"
            name={"texture"}
            id={"texture_name"}
            value={this.state.texture}
            onChange={this.selectChange}
          >
            <option value={"厚い"}>厚い</option>
            <option value={"脂っこい"}>脂っこい</option>
            <option value={"油っこい"}>油っこい</option>
            <option value={"脂っぽい"}>脂っぽい</option>
            <option value={"油っぽい"}>油っぽい</option>
            <option value={"粗い"}>粗い</option>
            <option value="泡状">泡状</option>
            <option value="泡の立つ">泡の立つ</option>
            <option value="いがいが">いがいが</option>
            <option value="糸を引く">糸を引く</option>
            <option value="薄い">薄い</option>
            <option value="うろこ状">うろこ状</option>
            <option value="液状">液状</option>
            <option value="液のしたたる">液のしたたる</option>
            <option value="重い">重い</option>
            <option value="かくばった">かくばった</option>
            <option value="かさかさ">かさかさ</option>
            <option value="がさがさ">がさがさ</option>
            <option value="かさつく">かさつく</option>
            <option value="かすかす">かすかす</option>
            <option value="かたい">かたい</option>
            <option value="硬い">硬い</option>
            <option value="堅い">堅い</option>
            <option value="固い">固い</option>
            <option value="塊状">塊状</option>
            <option value="かちかち">かちかち</option>
            <option value="がちがち">がちがち</option>
            <option value="かちんかちん">かちんかちん</option>
            <option value="かちんこちん">かちんこちん</option>
            <option value="がっしり">がっしり</option>
            <option value="かどばった">かどばった</option>
            <option value="かみ切れない">かみ切れない</option>
            <option value="かみごたえ">かみごたえ</option>
            <option value="かゆ状">かゆ状</option>
            <option value="からから">からから</option>
            <option value="からっ">からっ</option>
            <option value="からみつく">からみつく</option>
            <option value="からり">からり</option>
            <option value="カリカリ">カリカリ</option>
            <option value="ガリガリ">ガリガリ</option>
            <option value="カリッ">カリッ</option>
            <option value="ガリッ">ガリッ</option>
            <option value="顆粒状">顆粒状</option>
            <option value="軽い">軽い</option>
            <option value="乾いた">乾いた</option>
            <option value="皮ばった">皮ばった</option>
            <option value="キシキシ">キシキシ</option>
            <option value="ギシギシ">ギシギシ</option>
            <option value="ぎっしり">ぎっしり</option>
            <option value="ぎとぎと">ぎとぎと</option>
            <option value="ぎとっ">ぎとっ</option>
            <option value="きめ細かい">きめ細かい</option>
            <option value="吸湿性">吸湿性</option>
            <option value="球状">球状</option>
            <option value="吸水性">吸水性</option>
            <option value="強靭な">強靭な</option>
            <option value="切れやすい">切れやすい</option>
            <option value="均一な">均一な</option>
            <option value="くしゃくしゃ">くしゃくしゃ</option>
            <option value="ぐしゃぐしゃ">ぐしゃぐしゃ</option>
            <option value="くしゃっ">くしゃっ</option>
            <option value="ぐしゃっ">ぐしゃっ</option>
            <option value="ぐずぐず">ぐずぐず</option>
            <option value="くずれやすい">くずれやすい</option>
            <option value="くたくた">くたくた</option>
            <option value="くだけやすい">くだけやすい</option>
            <option value="くたっ">くたっ</option>
            <option value="口あたり">口あたり</option>
            <option value="口ざわり">口ざわり</option>
            <option value="口どけ">口どけ</option>
            <option value="くちゃくちゃ">くちゃくちゃ</option>
            <option value="ぐちゃぐちゃ">ぐちゃぐちゃ</option>
            <option value="くちゃっ">くちゃっ</option>
            <option value="ぐちゃっ">ぐちゃっ</option>
            <option value="くちゅくちゅ">くちゅくちゅ</option>
            <option value="ぐちょぐちょ">ぐちょぐちょ</option>
            <option value="ぐちょっ">ぐちょっ</option>
            <option value="くっつく">くっつく</option>
            <option value="くにゃくにゃ">くにゃくにゃ</option>
            <option value="ぐにゃぐにゃ">ぐにゃぐにゃ</option>
            <option value="くにゃっ">くにゃっ</option>
            <option value="ぐにゃっ">ぐにゃっ</option>
            <option value="くにゃり">くにゃり</option>
            <option value="ぐにゃり">ぐにゃり</option>
            <option value="くにゅくにゅ">くにゅくにゅ</option>
            <option value="ぐにゅぐにゅ">ぐにゅぐにゅ</option>
            <option value="ぐにゅっ">ぐにゅっ</option>
            <option value="くにょくにょ">くにょくにょ</option>
            <option value="ぐにょぐにょ">ぐにょぐにょ</option>
            <option value="ぐにょっ">ぐにょっ</option>
            <option value="クリーミー">クリーミー</option>
            <option value="クリーム状">クリーム状</option>
            <option value="結晶状">結晶状</option>
            <option value="コキコキ">コキコキ</option>
            <option value="こく">こく</option>
            <option value="固形">固形</option>
            <option value="こし">こし</option>
            <option value="こちこち">こちこち</option>
            <option value="こちっ">こちっ</option>
            <option value="こちんこちん">こちんこちん</option>
            <option value="ごつごつ">ごつごつ</option>
            <option value="こってり">こってり</option>
            <option value="粉状">粉状</option>
            <option value="粉っぽい">粉っぽい</option>
            <option value="粉をふいた">粉をふいた</option>
            <option value="細かい">細かい</option>
            <option value="ゴム">ゴム</option>
            <option value="コリコリ">コリコリ</option>
            <option value="ゴリゴリ">ゴリゴリ</option>
            <option value="コリッ">コリッ</option>
            <option value="ゴリッ">ゴリッ</option>
            <option value="ころころ">ころころ</option>
            <option value="ごろごろ">ごろごろ</option>
            <option value="ころっ">ころっ</option>
            <option value="ごろっ">ごろっ</option>
            <option value="ころり">ころり</option>
            <option value="ごろり">ごろり</option>
            <option value="こわい">こわい</option>
            <option value="ごわごわ">ごわごわ</option>
            <option value="ごわっ">ごわっ</option>
            <option value="こわれやすい">こわれやすい</option>
            <option value="サクサク">サクサク</option>
            <option value="ザクザク">ザクザク</option>
            <option value="サクッ">サクッ</option>
            <option value="ザクッ">ザクッ</option>
            <option value="裂けやすい">裂けやすい</option>
            <option value="さっくり">さっくり</option>
            <option value="ざっくり">ざっくり</option>
            <option value="さらさら">さらさら</option>
            <option value="ざらざら">ざらざら</option>
            <option value="さらっ">さらっ</option>
            <option value="ざらっ">ざらっ</option>
            <option value="ざらつく">ざらつく</option>
            <option value="さらり">さらり</option>
            <option value="ざらり">ざらり</option>
            <option value="サンドイッチ状">サンドイッチ状</option>
            <option value="しけた">しけた</option>
            <option value="しけった">しけった</option>
            <option value="しこしこ">しこしこ</option>
            <option value="しこっ">しこっ</option>
            <option value="舌ざわり">舌ざわり</option>
            <option value="舌に残る">舌に残る</option>
            <option value="しっかり">しっかり</option>
            <option value="しっけた">しっけた</option>
            <option value="しっとり">しっとり</option>
            <option value="じっとり">じっとり</option>
            <option value="じとじと">じとじと</option>
            <option value="しとっ">しとっ</option>
            <option value="じとっ">じとっ</option>
            <option value="しなしな">しなしな</option>
            <option value="しなっ">しなっ</option>
            <option value="しなびた">しなびた</option>
            <option value="しなやか">しなやか</option>
            <option value="渋い">渋い</option>
            <option value="しまり">しまり</option>
            <option value="湿った">湿った</option>
            <option value="霜降り状">霜降り状</option>
            <option value="シャーベット状">シャーベット状</option>
            <option value="シャキシャキ">シャキシャキ</option>
            <option value="シャキッ">シャキッ</option>
            <option value="シャクシャク">シャクシャク</option>
            <option value="しゃっきり">しゃっきり</option>
            <option value="シャリシャリ">シャリシャリ</option>
            <option value="ジャリジャリ">ジャリジャリ</option>
            <option value="シャリッ">シャリッ</option>
            <option value="ジャリッ">ジャリッ</option>
            <option value="ジューシー">ジューシー</option>
            <option value="柔軟">柔軟</option>
            <option value="収れん性">収れん性</option>
            <option value="じゅくじゅく">じゅくじゅく</option>
            <option value="じゅるじゅる">じゅるじゅる</option>
            <option value="じゅるっ">じゅるっ</option>
            <option value="シュワシュワ">シュワシュワ</option>
            <option value="ジュワジュワ">ジュワジュワ</option>
            <option value="シュワッ">シュワッ</option>
            <option value="ジュワッ">ジュワッ</option>
            <option value="ショリショリ">ショリショリ</option>
            <option value="ショリッ">ショリッ</option>
            <option value="汁気">汁気</option>
            <option value="芯">芯</option>
            <option value="しんなり">しんなり</option>
            <option value="すかすか">すかすか</option>
            <option value="すかっ">すかっ</option>
            <option value="すじっぽい">すじっぽい</option>
            <option value="ずっしり">ずっしり</option>
            <option value="砂状">砂状</option>
            <option value="砂っぽい">砂っぽい</option>
            <option value="すべすべ">すべすべ</option>
            <option value="すべる">すべる</option>
            <option value="スポンジ状">スポンジ状</option>
            <option value="するする">するする</option>
            <option value="ズルズル">ズルズル</option>
            <option value="するっ">するっ</option>
            <option value="ズルッ">ズルッ</option>
            <option value="するり">するり</option>
            <option value="ずるり">ずるり</option>
            <option value="ゼリー状">ゼリー状</option>
            <option value="繊維状">繊維状</option>
            <option value="層状">層状</option>
            <option value="たらたら">たらたら</option>
            <option value="だらだら">だらだら</option>
            <option value="たらっ">たらっ</option>
            <option value="だらっ">だらっ</option>
            <option value="たらり">たらり</option>
            <option value="だらり">だらり</option>
            <option value="弾力">弾力</option>
            <option value="ちぎれやすい">ちぎれやすい</option>
            <option value="ちぢれた">ちぢれた</option>
            <option value="ちゅるちゅる">ちゅるちゅる</option>
            <option value="ちゅるっ">ちゅるっ</option>
            <option value="ちりちり">ちりちり</option>
            <option value="ちりっ">ちりっ</option>
            <option value="粒状">粒状</option>
            <option value="つぶつぶ">つぶつぶ</option>
            <option value="つぶれやすい">つぶれやすい</option>
            <option value="つまった">つまった</option>
            <option value="つるっ">つるっ</option>
            <option value="つるつる">つるつる</option>
            <option value="つるり">つるり</option>
            <option value="つるん">つるん</option>
            <option value="でこぼこ">でこぼこ</option>
            <option value="とげとげ">とげとげ</option>
            <option value="どっしり">どっしり</option>
            <option value="とろける">とろける</option>
            <option value="とろっ">とろっ</option>
            <option value="どろっ">どろっ</option>
            <option value="とろとろ">とろとろ</option>
            <option value="どろどろ">どろどろ</option>
            <option value="とろみ">とろみ</option>
            <option value="とろり">とろり</option>
            <option value="どろり">どろり</option>
            <option value="なめらか">なめらか</option>
            <option value="にちゃっ">にちゃっ</option>
            <option value="にちゃにちゃ">にちゃにちゃ</option>
            <option value="乳状">乳状</option>
            <option value="にゅるっ">にゅるっ</option>
            <option value="にゅるにゅる">にゅるにゅる</option>
            <option value="にゅるり">にゅるり</option>
            <option value="ぬたっ">ぬたっ</option>
            <option value="ぬちゃっ">ぬちゃっ</option>
            <option value="ぬちゃぬちゃ">ぬちゃぬちゃ</option>
            <option value="ぬとっ">ぬとっ</option>
            <option value="ぬめっ">ぬめっ</option>
            <option value="ぬめぬめ">ぬめぬめ</option>
            <option value="ぬめり">ぬめり</option>
            <option value="ぬらっ">ぬらっ</option>
            <option value="ぬらぬら">ぬらぬら</option>
            <option value="ぬらり">ぬらり</option>
            <option value="ぬるっ">ぬるっ</option>
            <option value="ぬるぬる">ぬるぬる</option>
            <option value="ぬるり">ぬるり</option>
            <option value="ねたっ">ねたっ</option>
            <option value="ねたねた">ねたねた</option>
            <option value="ねちっ">ねちっ</option>
            <option value="ねちねち">ねちねち</option>
            <option value="ねちゃっ">ねちゃっ</option>
            <option value="ねちゃねちゃ">ねちゃねちゃ</option>
            <option value="ねちょっ">ねちょっ</option>
            <option value="ねちょねちょ">ねちょねちょ</option>
            <option value="ねっちり">ねっちり</option>
            <option value="ねっとり">ねっとり</option>
            <option value="ねとっ">ねとっ</option>
            <option value="ねとつく">ねとつく</option>
            <option value="ねとねと">ねとねと</option>
            <option value="ねばい">ねばい</option>
            <option value="ねばっ">ねばっ</option>
            <option value="ねばつく">ねばつく</option>
            <option value="ねばっこい">ねばっこい</option>
            <option value="ねばねば">ねばねば</option>
            <option value="ねばり">ねばり</option>
            <option value="濃厚">濃厚</option>
            <option value="のどごし">のどごし</option>
            <option value="のびた">のびた</option>
            <option value="のびる">のびる</option>
            <option value="糊状">糊状</option>
            <option value="パキッ">パキッ</option>
            <option value="バキッ">バキッ</option>
            <option value="パキパキ">パキパキ</option>
            <option value="バキバキ">バキバキ</option>
            <option value="歯切れ">歯切れ</option>
            <option value="薄片状">薄片状</option>
            <option value="歯ごたえ">歯ごたえ</option>
            <option value="ばさっ">ばさっ</option>
            <option value="ぱさっ">ぱさっ</option>
            <option value="ぱさつく">ぱさつく</option>
            <option value="ばさばさ">ばさばさ</option>
            <option value="ぱさぱさ">ぱさぱさ</option>
            <option value="歯ざわり">歯ざわり</option>
            <option value="はじける">はじける</option>
            <option value="パチパチ">パチパチ</option>
            <option value="パフ状">パフ状</option>
            <option value="ばらっ">ばらっ</option>
            <option value="ぱらっ">ぱらっ</option>
            <option value="ばらばら">ばらばら</option>
            <option value="ぱらぱら">ぱらぱら</option>
            <option value="ばらり">ばらり</option>
            <option value="ぱらり">ぱらり</option>
            <option value="バリッ">バリッ</option>
            <option value="パリッ">パリッ</option>
            <option value="バリバリ">バリバリ</option>
            <option value="パリパリ">パリパリ</option>
            <option value="ひからびた">ひからびた</option>
            <option value="びちゃっ">びちゃっ</option>
            <option value="びちゃびちゃ">びちゃびちゃ</option>
            <option value="ぴちゃぴちゃ">ぴちゃぴちゃ</option>
            <option value="ふかっ">ふかっ</option>
            <option value="ふかふか">ふかふか</option>
            <option value="ぶちっ">ぶちっ</option>
            <option value="ぷちっ">ぷちっ</option>
            <option value="ぶちぶち">ぶちぶち</option>
            <option value="ぷちぷち">ぷちぷち</option>
            <option value="ぶちゅ">ぶちゅ</option>
            <option value="ぷちゅ">ぷちゅ</option>
            <option value="ふっくら">ふっくら</option>
            <option value="ふっくり">ふっくり</option>
            <option value="ぷっくり">ぷっくり</option>
            <option value="ぶつっ">ぶつっ</option>
            <option value="ぷつっ">ぷつっ</option>
            <option value="ぶつぶつ">ぶつぶつ</option>
            <option value="ぷつぷつ">ぷつぷつ</option>
            <option value="ぷにぷに">ぷにぷに</option>
            <option value="ふにゃっ">ふにゃっ</option>
            <option value="ふにゃふにゃ">ふにゃふにゃ</option>
            <option value="ふにゃり">ふにゃり</option>
            <option value="ぷにゅぷにゅ">ぷにゅぷにゅ</option>
            <option value="ふにょふにょ">ふにょふにょ</option>
            <option value="ぶにょぶにょ">ぶにょぶにょ</option>
            <option value="ぷにょぷにょ">ぷにょぷにょ</option>
            <option value="ふやけた">ふやけた</option>
            <option value="ぶよっ">ぶよっ</option>
            <option value="ぶよぶよ">ぶよぶよ</option>
            <option value="ぷよぷよ">ぷよぷよ</option>
            <option value="ぶりっ">ぶりっ</option>
            <option value="ぷりっ">ぷりっ</option>
            <option value="ぶりぶり">ぶりぶり</option>
            <option value="ぷりぷり">ぷりぷり</option>
            <option value="ぶりん">ぶりん</option>
            <option value="ぷりん">ぷりん</option>
            <option value="ぶりんぶりん">ぶりんぶりん</option>
            <option value="ぷりんぷりん">ぷりんぷりん</option>
            <option value="ふるふる">ふるふる</option>
            <option value="ぶるぶる">ぶるぶる</option>
            <option value="ぷるぷる">ぷるぷる</option>
            <option value="ぶるん">ぶるん</option>
            <option value="ぷるん">ぷるん</option>
            <option value="ぶるんぶるん">ぶるんぶるん</option>
            <option value="ぷるんぷるん">ぷるんぷるん</option>
            <option value="ふわっ">ふわっ</option>
            <option value="ふわふわ">ふわふわ</option>
            <option value="ぶわぶわ">ぶわぶわ</option>
            <option value="ぷわぷわ">ぷわぷわ</option>
            <option value="ふわり">ふわり</option>
            <option value="分離">分離</option>
            <option value="ふんわか">ふんわか</option>
            <option value="ふんわり">ふんわり</option>
            <option value="べたっ">べたっ</option>
            <option value="ぺたっ">ぺたっ</option>
            <option value="べたつく">べたつく</option>
            <option value="べたべた">べたべた</option>
            <option value="ぺたぺた">ぺたぺた</option>
            <option value="べちゃっ">べちゃっ</option>
            <option value="ぺちゃっ">ぺちゃっ</option>
            <option value="べちゃべちゃ">べちゃべちゃ</option>
            <option value="べちゃり">べちゃり</option>
            <option value="ぺちゃり">ぺちゃり</option>
            <option value="べちょっ">べちょっ</option>
            <option value="べちょべちょ">べちょべちょ</option>
            <option value="べったり">べったり</option>
            <option value="ぺったり">ぺったり</option>
            <option value="べっとり">べっとり</option>
            <option value="ぺっとり">ぺっとり</option>
            <option value="べとっ">べとっ</option>
            <option value="ぺとっ">ぺとっ</option>
            <option value="べとつく">べとつく</option>
            <option value="べとべと">べとべと</option>
            <option value="ぺとぺと">ぺとぺと</option>
            <option value="へなっ">へなっ</option>
            <option value="へなへな">へなへな</option>
            <option value="ぺらぺら">ぺらぺら</option>
            <option value="べろべろ">べろべろ</option>
            <option value="ボキッ">ボキッ</option>
            <option value="ポキッ">ポキッ</option>
            <option value="ボキボキ">ボキボキ</option>
            <option value="ポキポキ">ポキポキ</option>
            <option value="ほくほく">ほくほく</option>
            <option value="ぽくぽく">ぽくぽく</option>
            <option value="ほぐれやすい">ほぐれやすい</option>
            <option value="ほこほこ">ほこほこ</option>
            <option value="ぼそっ">ぼそっ</option>
            <option value="ぽそっ">ぽそっ</option>
            <option value="ぼそぼそ">ぼそぼそ</option>
            <option value="ぽそぽそ">ぽそぽそ</option>
            <option value="ほっくり">ほっくり</option>
            <option value="ぽっくり">ぽっくり</option>
            <option value="ほっこり">ほっこり</option>
            <option value="ぼってり">ぼってり</option>
            <option value="ぽってり">ぽってり</option>
            <option value="ぼてっ">ぼてっ</option>
            <option value="ぽてっ">ぽてっ</option>
            <option value="ぼてぼて">ぼてぼて</option>
            <option value="ボリッ">ボリッ</option>
            <option value="ポリッ">ポリッ</option>
            <option value="ボリボリ">ボリボリ</option>
            <option value="ポリポリ">ポリポリ</option>
            <option value="ほろっ">ほろっ</option>
            <option value="ぼろっ">ぼろっ</option>
            <option value="ぽろっ">ぽろっ</option>
            <option value="ほろほろ">ほろほろ</option>
            <option value="ぼろぼろ">ぼろぼろ</option>
            <option value="ぽろぽろ">ぽろぽろ</option>
            <option value="ほろり">ほろり</option>
            <option value="ぼろり">ぼろり</option>
            <option value="ぽろり">ぽろり</option>
            <option value="ほわっ">ほわっ</option>
            <option value="ほわほわ">ほわほわ</option>
            <option value="膜状">膜状</option>
            <option value="まったり">まったり</option>
            <option value="まとわりつく">まとわりつく</option>
            <option value="まろやか">まろやか</option>
            <option value="水飴状">水飴状</option>
            <option value="水気">水気</option>
            <option value="水っぽい">水っぽい</option>
            <option value="みずみずしい">みずみずしい</option>
            <option value="蜜状">蜜状</option>
            <option value="密な">密な</option>
            <option value="むちむち">むちむち</option>
            <option value="むっちり">むっちり</option>
            <option value="むにゅっ">むにゅっ</option>
            <option value="むにゅむにゅ">むにゅむにゅ</option>
            <option value="もさもさ">もさもさ</option>
            <option value="もそっ">もそっ</option>
            <option value="もそもそ">もそもそ</option>
            <option value="もちっ">もちっ</option>
            <option value="もちもち">もちもち</option>
            <option value="もっさり">もっさり</option>
            <option value="もったり">もったり</option>
            <option value="もっちり">もっちり</option>
            <option value="もろい">もろい</option>
            <option value="もろっ">もろっ</option>
            <option value="もろもろ">もろもろ</option>
            <option value="やわらかい">やわらかい</option>
            <option value="柔らかい">柔らかい</option>
            <option value="軟らかい">軟らかい</option>
            <option value="ゆるい">ゆるい</option>
            <option value="わた状の">わた状の</option>
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
    this.setState({ texture: newValue });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = this.state.keyword;
    const texture = this.state.texture;
    const url = `/result/${keyword}/${texture}/0`;

    this.props.history.push(url);
  }
}

export default withRouter(SearchForm);
