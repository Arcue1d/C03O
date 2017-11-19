//デッキ種類と番号を設定
var SPYRAL      = 1;
var SUBTERROR   = 2;
var SHADDOLL    = 3;
var ABYSS       = 4;
var INFERNOID   = 5;

var CHALICE     = 1;
var JACKKNIGHTS = 2;
var WEATHER     = 3;
var ULTRA       = 4;
var INZEKTOR    = 5;

var RESULT = '';

var hum = prompt('10種類の中からあなたにオススメの遊戯王デッキを探します。 \n\n :1,高いデッキ\n :2,安いデッキ');
hum = parseInt(hum, 10);

if (hum !== 1 && hum !== 2) {
  // 入力値が不適切な場合
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else if(hum === 1){
    hum = prompt('あなたの好きなデュエルスタイルを選んでください。 \n\n :1,相手のデッキから情報を盗み、勝利へ繋ぐ！\n :2,高Lvリバースモンスターで相手を乱す！\n :3,相手の場すら巻き込んだ融合召喚で強いモンスターを！\n :4,墓地に送られると効果が発動！？相手が強いほど自分も強くなる！\n :5,自分のデッキを半分近く墓地送り！？墓地から出でよ強力モンスター！');
    hum = parseInt(hum, 10);
    
    if (hum !== SPYRAL && hum !== SUBTERROR　&& hum !== SHADDOLL && hum !== ABYSS && hum !== INFERNOID) {
        // 入力値が不適切な場合
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
    } else if(hum !== SPYRAL){
        RESULT = 'あなたにオススメのデッキは「ＳＰＹＲＡＬ」です！';
    } else if(hum !== SUBTERROR){
        RESULT = 'あなたにオススメのデッキは「サブテラー」です！';
    } else if(hum !== SHADDOLL){
        RESULT = 'あなたにオススメのデッキは「シャドール」です！';
    } else if(hum !== ABYSS){
        RESULT = 'あなたにオススメのデッキは「彼岸」です！';
    } else if(hum !== INFERNOID){
        RESULT = 'あなたにオススメのデッキは「インフェルノイド」です！';
    }
} else if(hum === 2){
    hum = prompt('あなたの好きなデュエルスタイルを選んでください。 \n\n :1,連続リンク召喚で若き英雄達を呼び出す！\n :2,鍵は縦列！？次々に出てくる強力モンスターでビートダウン！\n :3,敵の行動は全て裏目にして返す！魔法罠中心のコントロール\n :4,屈強なアスリートが堂々入場！攻撃と防御を素早く切り替えて相手を翻弄しろ！\n :5,一寸の虫にも五分の魂！通った後には何も残さない！');
    hum = parseInt(hum, 10);
    
    if (hum !== CHALICE && hum !== JACKKNIGHTS　&& hum !== WEATHER && hum !== ULTRA && hum !== INZEKTOR) {
        // 入力値が不適切な場合
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
    } else if(hum !== CHALICE){
        RESULT = 'あなたにオススメのデッキは「星杯」です！';
    } else if(hum !== JACKKNIGHTS){
        RESULT = 'あなたにオススメのデッキは「機界騎士」です！';
    } else if(hum !== WEATHER){
        RESULT = 'あなたにオススメのデッキは「天気」です！';
    } else if(hum !== ULTRA){
        RESULT = 'あなたにオススメのデッキは「Ｕ.Ａ.(ウルトラアスリート)」です！';
    } else if(hum !== INZEKTOR){
        RESULT = 'あなたにオススメのデッキは「甲虫装機」です！';
    }
}

alert(RESULT);