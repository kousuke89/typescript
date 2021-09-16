// アノテーション型
// ジェネリクス型
// インターフェース型
// タイプ型

type strOrNumber = string | number;
type Obj = object;

export type sample = {
    readonly name: string;//readonly修飾
    message: string;
    age: number;
    [moreProps: string]: strOrNumber;//インデックスシグネチャ
}

enum Person {
    Tom = 'Tom',
    Jhon = 'Jhon',
    Kate = 'Kate'
}//列挙型enum... Symbolのように一意の型を定義する

let Tom:Person = Person.Tom;//enum Person内の値しか代入できない
console.log(Tom === 'Tom');//true
// Tom = 'Tom'; 文字列Tomは型PersonのTomとは別物である為、代入できない

// リテラル型( + 共用体型… |で複数の型を定義する)

let Animal:'CAT' | 'DOG' | 'CHIKIN' = 'CAT';

// タプル型･･･配列の型の順番を定義する.レストパラメータの使用も可能
let aaa:[string, number, boolean, ...string[]];