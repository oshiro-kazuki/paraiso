import { from } from "rxjs";
import { drink } from './drink';
import { food } from './food';
import { party } from './party';

export const contents = [
  {
    title: 'ドリンク',
    sub: 'Drink',
    src: '../../../../assets/img/drink3.JPG',
    desc: '約４００本もある壁１面のボトル棚！！  迫力満点！！カウンター席で飲むのもオススメですよ♪以下はほんの一例です',
    content: drink
  },
  {
    title: 'フード',
    sub: 'Food',
    src: '../../../../assets/img/food1.JPG',
    desc: 'シェフ自慢の手作り本格料理！！その中でもパスタとアヒージョ、スイーツも大人気♪何種類もある中からお好みでお選び下さい♪強くオススメです！！',
    content: food
  },
  {
    title: 'パーティ',
    sub: 'Party',
    src: '../../../../assets/img/top04.JPG',
    desc: '最大７0名様まで貸切対応しております。忘新年会、歓送迎会、結婚式2次会、同窓会、各種パーティー等・・・お気軽にお問い合わせ下さい！',
    content: party
  },
  {
    title: 'テイクアウト',
    sub: 'Takeout',
    src: '../../../../assets/img/teke01.JPG',
    desc: 'シェフ自慢の手作り本格料理！！その中でもパスタとアヒージョ、スイーツも大人気♪何種類もある中からお好みでお選び下さい♪強くオススメです！！',
    content: drink
  },
];