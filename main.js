//画面表示
$(".dealer_t,#dealer_2_2,.you_t").fadeIn(1000);

//bgm
$(document).ready(function() {
    var audio = $('#bgm')[0]; // audio要素を取得
    var isPlaying = false; // ローカルストレージから状態を取得

    // デフォルトの音量を小さく設定（例えば、0.2に設定）
    audio.volume = 0.2; // 初期音量を20%に設定

    $('#playButton').click(function() {
        if (isPlaying) {
            audio.pause(); // 音楽を一時停止
            audio.currentTime = 0; // 再生位置を最初に戻す
            $(this).text('♪ MUSIC ON'); // ボタンのテキストを「再生」に変更
        } else {
            audio.play(); // 音楽を再生
            $(this).text('♪ MUSIC OFF'); // ボタンのテキストを「停止」に変更
        }
        isPlaying = !isPlaying; // フラグを反転
        localStorage.setItem('isPlaying', isPlaying); // ローカルストレージに状態を保存
    });
});

// トランプデッキを作成する関数
function createDeck() {
    const suits = ['♠︎', '♥️', '♦️', '♣️']; // スート
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']; // ランク
    let deck = [];

    // スートとランクを組み合わせてデッキを作成
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${suit}${rank}`);
        }
    }

    return deck;
}

// Fisher-Yatesアルゴリズムによるシャッフル関数
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // カードを交換
    }
    return deck;
}

// カードを引く関数
function drawCard(deck) {
    if (deck.length === 0) {
        return 'デッキが空です';
    }
    return deck.pop(); // デッキから1枚引く
}

// デッキを作成してシャッフル
let deck = createDeck();
deck = shuffleDeck(deck);

// テスト: カードを重複なく引く
// console.log('引いたカード:', drawCard(deck)); // 1枚目
// console.log('引いたカード:', drawCard(deck)); // 2枚目
// console.log('残りのカード数:', deck.length);

//カード画像を表示する関数
let currentCard = "♠︎5";
let cardURL = "img/omote.png";
function imgCard(currentCard, cardURL) {
    if (currentCard == "♠︎1") {
        cardURL = "img/s1.png"
    } else if (currentCard == "♠︎2") {
        cardURL = "img/s2.png"
    } else if (currentCard == "♠︎3") {
        cardURL = "img/s3.png"
    } else if (currentCard == "♠︎4") {
        cardURL = "img/s4.png"
    } else if (currentCard == "♠︎5") {
        cardURL = "img/s5.png"
    } else if (currentCard == "♠︎6") {
        cardURL = "img/s6.png"
    } else if (currentCard == "♠︎7") {
        cardURL = "img/s7.png"
    } else if (currentCard == "♠︎8") {
        cardURL = "img/s8.png"
    } else if (currentCard == "♠︎9") {
        cardURL = "img/s9.png"
    } else if (currentCard == "♠︎10") {
        cardURL = "img/s10.png"
    } else if (currentCard == "♠︎11") {
        cardURL = "img/s11.png"
    } else if (currentCard == "♠︎12") {
        cardURL = "img/s12.png"
    } else if (currentCard == "♠︎13") {
        cardURL = "img/s13.png"
    } else if (currentCard == "♥️1") {
        cardURL = "img/h1.png"
    } else if (currentCard == "♥️2") {
        cardURL = "img/h2.png"
    } else if (currentCard == "♥️3") {
        cardURL = "img/h3.png"
    } else if (currentCard == "♥️4") {
        cardURL = "img/h4.png"
    } else if (currentCard == "♥️5") {
        cardURL = "img/h5.png"
    } else if (currentCard == "♥️6") {
        cardURL = "img/h6.png"
    } else if (currentCard == "♥️7") {
        cardURL = "img/h7.png"
    } else if (currentCard == "♥️8") {
        cardURL = "img/h8.png"
    } else if (currentCard == "♥️9") {
        cardURL = "img/h9.png"
    } else if (currentCard == "♥️10") {
        cardURL = "img/h10.png"
    } else if (currentCard == "♥️11") {
        cardURL = "img/h11.png"
    } else if (currentCard == "♥️12") {
        cardURL = "img/h12.png"
    } else if (currentCard == "♥️13") {
        cardURL = "img/h13.png"
    } else if (currentCard == "♦️1") {
        cardURL = "img/d1.png"
    } else if (currentCard == "♦️2") {
        cardURL = "img/d2.png"
    } else if (currentCard == "♦️3") {
        cardURL = "img/d3.png"
    } else if (currentCard == "♦️4") {
        cardURL = "img/d4.png"
    } else if (currentCard == "♦️5") {
        cardURL = "img/d5.png"
    } else if (currentCard == "♦️6") {
        cardURL = "img/d6.png"
    } else if (currentCard == "♦️7") {
        cardURL = "img/d7.png"
    } else if (currentCard == "♦️8") {
        cardURL = "img/d8.png"
    } else if (currentCard == "♦️9") {
        cardURL = "img/d9.png"
    } else if (currentCard == "♦️10") {
        cardURL = "img/d10.png"
    } else if (currentCard == "♦️11") {
        cardURL = "img/d11.png"
    } else if (currentCard == "♦️12") {
        cardURL = "img/d12.png"
    } else if (currentCard == "♦️13") {
        cardURL = "img/d13.png"
    } else if (currentCard == "♣️1") {
        cardURL = "img/c1.png"
    } else if (currentCard == "♣️2") {
        cardURL = "img/c2.png"
    } else if (currentCard == "♣️3") {
        cardURL = "img/c3.png"
    } else if (currentCard == "♣️4") {
        cardURL = "img/c4.png"
    } else if (currentCard == "♣️5") {
        cardURL = "img/c5.png"
    } else if (currentCard == "♣️6") {
        cardURL = "img/c6.png"
    } else if (currentCard == "♣️7") {
        cardURL = "img/c7.png"
    } else if (currentCard == "♣️8") {
        cardURL = "img/c8.png"
    } else if (currentCard == "♣️9") {
        cardURL = "img/c9.png"
    } else if (currentCard == "♣️10") {
        cardURL = "img/c10.png"
    } else if (currentCard == "♣️11") {
        cardURL = "img/c11.png"
    } else if (currentCard == "♣️12") {
        cardURL = "img/c12.png"
    } else if (currentCard == "♣️13") {
        cardURL = "img/c13.png"
    }
    return cardURL;
}

//掛け金とクレジットを設定
const betAmounts = [1, 5, 10, 50, 100, 500];
const bet_btns = $("#bet_btns");
const firstcredit = 30;
const credit_area = $("#credit_area");

//掛け金を動的に表示
credit_area.append('<div id="credit">' + firstcredit + '</div>');
let credit = Number($("#credit").text());

//ボタンを動的に生成して追加
betAmounts.forEach(function (bet) {
    bet_btns.append('<button class="start" value="' + bet + '">' + bet + '$</button>');
})

//掛け金をクリックしたときの処理
let dealerScore = 0;
let youScore = 0;
let selectBet = Number("");



$(".start").on("click", function () {
    var audio2 = $('#charin')[0];
    audio2.play(); 
    selectBet = Number($(this).val());
    if (selectBet > credit) {
        return
    } else if (selectBet <= credit) {
        $("#bet").text(selectBet);
        credit = Number($("#credit").text());
        $("#credit").text(credit - selectBet);
        credit = $("#credit").text();
        const dealer1 = drawCard(deck);  // カードを引く
        let currentCard = dealer1;       // currentCard に引いたカードを代入

        // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
        cardURL = imgCard(currentCard, cardURL);

        // 画像の src 属性に cardURL を設定
        $("#dealer_1").attr("src", cardURL);

        const dealer2 = drawCard(deck);  // カードを引く
        currentCard = dealer2;       // currentCard に引いたカードを代入

        // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
        cardURL = imgCard(currentCard, cardURL);

        // 画像の src 属性に cardURL を設定
        $("#dealer_2").attr("src", cardURL);

        const you1 = drawCard(deck);  // カードを引く
        currentCard = you1;       // currentCard に引いたカードを代入

        // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
        cardURL = imgCard(currentCard, cardURL);

        // 画像の src 属性に cardURL を設定
        $("#you_1").attr("src", cardURL);

        const you2 = drawCard(deck);  // カードを引く
        currentCard = you2;       // currentCard に引いたカードを代入

        // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
        cardURL = imgCard(currentCard, cardURL);

        // 画像の src 属性に cardURL を設定
        $("#you_2").attr("src", cardURL);

        let dealerNum1 = Number(dealer1.replace(/[^0-9^\.]/g, ""));
        let dealerNum2 = Number(dealer2.replace(/[^0-9^\.]/g, ""));
        let youNum1 = Number(you1.replace(/[^0-9^\.]/g, ""));
        let youNum2 = Number(you2.replace(/[^0-9^\.]/g, ""));

        // 数字を調整
        if (dealerNum1 >= 10) {
            dealerNum1 = 10;
        } else if (dealerNum1 == 1) {
            dealerNum1 = 11;
        }

        if (dealerNum2 >= 10) {
            dealerNum2 = 10;
        } else if (dealerNum2 === 1 && dealerNum1 !== 11) {
            dealerNum2 = 11;
        }

        if (youNum1 >= 10) {
            youNum1 = 10;
        } else if (youNum1 == 1) {
            youNum1 = 11;
        }

        if (youNum2 >= 10) {
            youNum2 = 10;
        } else if (youNum2 === 1 && youNum1 !== 11) {
            youNum2 = 11;
        }

        $("#score").html(youNum1 + youNum2);

        dealerScore = dealerNum1 + dealerNum2;
        youScore = youNum1 + youNum2;

        if (youScore == 21) {
            $("#dealer_2_2").css("display", "none");
            $("#dealer_score").html(dealerNum1 + dealerNum2);
            if (dealerScore == 21) {
                $("#message").html("BLACK JACK!!! DRAW...")
                credit = Number(credit); // credit を数値に変換
                selectBet = Number(selectBet); // selectBet を数値に変換  
                $("#credit").text(credit + selectBet);
                $("#bet").text(0);

                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else{
                 localStorage.clear();
                 localStorage.setItem(key,value);
                }
                setTimeout(function () {
                    location.reload();
                }, 2000);
            } else {
                $("#message").html("BLACK JACK!!!YOU WIN!!!");
                credit = Number(credit); // credit を数値に変換
                selectBet = Number(selectBet); // selectBet を数値に変換    
                $("#credit").text(credit + selectBet * 2);
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else{
                 localStorage.clear();
                 localStorage.setItem(key,value);
                }
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }
    }
})

//hit操作
$(document).ready(function () {
    let clickCount = 0;

    $("#hit").click(function () {
        clickCount++;

        if (clickCount === 1) {
            const you3 = drawCard(deck);  // カードを引く
            currentCard = you3;       // currentCard に引いたカードを代入

            // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
            cardURL = imgCard(currentCard, cardURL);

            // 画像の src 属性に cardURL を設定
            $("#you_3").attr("src", cardURL);

            let youNum3 = Number(you3.replace(/[^0-9^\.]/g, ""));

            // 数字を調整
            if (youNum3 >= 10) {
                youNum3 = 10;
            } else if (youNum3 == 1 && youScore <= 10) {
                dealerNum3 = 11;
            }

            youScore = youScore + youNum3;

            $("#score").html(youScore);

            if (youScore == 21) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);

                if (dealerScore == 21) {
                    $("#message").html("BLACK JACK!!! DRAW...");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                } else {
                    $("#message").html("BLACK JACK!!!YOU WIN!!!");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            } else if (youScore >= 22) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);

                $("#message").html("BUSTED!!!YOU LOSE...")
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else{
                 localStorage.clear();
                 localStorage.setItem(key,value);
                }
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } else if (clickCount === 2) {
            const you4 = drawCard(deck);  // カードを引く
            currentCard = you4;       // currentCard に引いたカードを代入

            // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
            cardURL = imgCard(currentCard, cardURL);

            // 画像の src 属性に cardURL を設定
            $("#you_4").attr("src", cardURL);

            let youNum4 = Number(you4.replace(/[^0-9^\.]/g, ""));

            // 数字を調整
            if (youNum4 >= 10) {
                youNum4 = 10;
            } else if (youNum4 == 1 && youScore <= 10) {
                dealerNum3 = 11;
            }

            youScore = youScore + youNum4;

            $("#score").html(youScore);

            if (youScore == 21) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);
                if (dealerScore == 21) {
                    $("#message").html("BLACK JACK!!! DRAW...");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                } else {
                    $("#message").html("BLACK JACK!!!YOU WIN!!!");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            } else if (youScore >= 22) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);
                $("#message").html("BUSTED!!!YOU LOSE...")
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else{
                 localStorage.clear();
                 localStorage.setItem(key,value);
                }
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } else if (clickCount === 3) {
            const you5 = drawCard(deck);  // カードを引く
            currentCard = you5;       // currentCard に引いたカードを代入

            // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
            cardURL = imgCard(currentCard, cardURL);

            // 画像の src 属性に cardURL を設定
            $("#you_5").attr("src", cardURL);

            let youNum5 = Number(you5.replace(/[^0-9^\.]/g, ""));

            // 数字を調整
            if (youNum5 >= 10) {
                youNum5 = 10;
            } else if (youNum5 == 1 && youScore <= 10) {
                dealerNum3 = 11;
            }

            youScore = youScore + youNum5;

            $("#score").html(youScore);

            if (youScore == 21) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);
                if (dealerScore == 21) {
                    $("#message").html("BLACK JACK!!! DRAW...");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                } else {
                    $("#message").html("BLACK JACK!!!YOU WIN!!!");
                    credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
                    $("#bet").text(0);
                    let key = Number($("#credit").text());
                    let value = Number($("#bet").text());
    
                    if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                    }else{
                     localStorage.clear();
                 localStorage.setItem(key,value);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            } else if (youScore >= 22) {
                $("#dealer_2_2").css("display", "none");
                $("#dealer_score").html(dealerScore);
                $("#message").html("BUSTED!!!YOU LOSE...")
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else{
                 localStorage.clear();
                 localStorage.setItem(key,value);
                }
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }
    })
})

//Stand操作
$("#stand").on("click", function () {
    $("#dealer_2_2").css("display", "none");
    $("#dealer_score").html(dealerScore);
    if (dealerScore == 21) {
        $("#message").html("YOU LOSE...")
        $("#bet").text(0);
        let key = Number($("#credit").text());
        let value = Number($("#bet").text());

        if(key == 0){
        $("#message").html("GAME OVER...");
        localStorage.clear();
        }else{
         localStorage.clear();
                 localStorage.setItem(key,value);
        }
        setTimeout(function () {
            location.reload();
        }, 2000);
    } else if (dealerScore < 21 && dealerScore >= 17) {
        if (dealerScore < youScore) {
            $("#message").html("CONGRATULAYIONS!YOU WIN!");
            credit = Number(credit); // credit を数値に変換
            selectBet = Number(selectBet); // selectBet を数値に変換  
            $("#credit").text(credit + selectBet * 2);
            $("#bet").text(0);
            let key = Number($("#credit").text());
            let value = Number($("#bet").text());
            
            if(key == 0){
            $("#message").html("GAME OVER...");
            localStorage.clear();
            }else{
             localStorage.clear();
                 localStorage.setItem(key,value);
            }
            setTimeout(function () {
                location.reload();
            }, 2000);
        } else if (dealerScore > youScore) {
            $("#message").html("YOU LOSE...");
            $("#bet").text(0);
            let key = Number($("#credit").text());
            let value = Number($("#bet").text());

            if(key == 0){
            $("#message").html("GAME OVER...");
            localStorage.clear();
            }else {
            localStorage.clear();
                 localStorage.setItem(key,value);
            }

            setTimeout(function () {
                location.reload();
            }, 2000);
        } else {
            $("#message").html("BLACK JACK!!! DRAW...");
            credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet);
            $("#bet").text(0);
            let key = Number($("#credit").text());
            let value = Number($("#bet").text());

            if(key == 0){
            $("#message").html("GAME OVER...");
            localStorage.clear();
            }else {
            localStorage.clear();
                 localStorage.setItem(key,value);
            }

            setTimeout(function () {
                location.reload();
            }, 2000);
        }
    } else if (dealerScore < 17) {
        const dealer3 = drawCard(deck);  // カードを引く
        let currentCard = dealer3;       // currentCard に引いたカードを代入

        // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
        cardURL = imgCard(currentCard, cardURL);

        // 画像の src 属性に cardURL を設定
        $("#dealer_3").attr("src", cardURL);

        let dealerNum3 = Number(dealer3.replace(/[^0-9^\.]/g, ""));

        // 数字を調整
        if (dealerNum3 >= 10) {
            dealerNum3 = 10;
        } else if (dealerNum3 == 1 && dealerScore <= 10) {
            dealerNum3 = 11;
        }

        dealerScore = dealerScore + dealerNum3;

        $("#dealer_score").html(dealerScore);

        if (dealerScore > 21) {
            $("#message").html("CONGRATULAYIONS!YOU WIN!");
            credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
            $("#bet").text(0);
            let key = Number($("#credit").text());
            let value = Number($("#bet").text());

            if(key == 0){
            $("#message").html("GAME OVER...");
            localStorage.clear();
            }else {
            localStorage.clear();
                 localStorage.setItem(key,value);
            }

            setTimeout(function () {
                location.reload();
            }, 2000);
        } else if (dealerScore == 21) {
            $("#message").html("YOU LOSE...");
            $("#bet").text(0);
            let key = Number($("#credit").text());
            let value = Number($("#bet").text());

            if(key == 0){
            $("#message").html("GAME OVER...");
            localStorage.clear();
            }else {
            localStorage.clear();
                 localStorage.setItem(key,value);
            }

            setTimeout(function () {
                location.reload();
            }, 2000);
        } else if (dealerScore < 21 && dealerScore >= 17) {
            if (dealerScore < youScore) {
                $("#message").html("CONGRATULAYIONS!YOU WIN!");
                credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else {
                localStorage.clear();
                 localStorage.setItem(key,value);
                }

            setTimeout(function () {
                    location.reload();
                }, 2000);
            } else if (dealerScore > youScore) {
                $("#message").html("YOU LOSE...");
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else {
                localStorage.clear();
                 localStorage.setItem(key,value);
                }

            setTimeout(function () {
                    location.reload();
                }, 2000);
            } else {
                $("#message").html("DRAW...");
                credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet);
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                $("#message").html("GAME OVER...");
                localStorage.clear();
                }else {
                localStorage.clear();
                 localStorage.setItem(key,value);
                }

            setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } else if (dealerScore < 17) {
            const dealer4 = drawCard(deck);  // カードを引く
            let currentCard = dealer4;       // currentCard に引いたカードを代入

            // imgCard 関数でカードの画像URLを取得し、それを cardURL に代入
            cardURL = imgCard(currentCard, cardURL);

            // 画像の src 属性に cardURL を設定
            $("#dealer_4").attr("src", cardURL);

            let dealerNum4 = Number(dealer4.replace(/[^0-9^\.]/g, ""));

            // 数字を調整
            if (dealerNum4 >= 10) {
                dealerNum3 = 10;
            } else if (dealerNum4 == 1 && dealerScore <= 10) {
                dealerNum4 = 11;
            }

            dealerScore = dealerScore + dealerNum4;

            $("#dealer_score").html(dealerScore);

            if (dealerScore > 21) {
                $("#message").html("CONGRATULAYIONS!YOU WIN!");
                credit = Number(credit); // credit を数値に変換
                    selectBet = Number(selectBet); // selectBet を数値に変換  
                    $("#credit").text(credit + selectBet * 2);
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                }else {
                     localStorage.clear();
                 localStorage.setItem(key,value);
                }

            setTimeout(function () {
                    location.reload();
                }, 2000);
            } else if (dealerScore == 21) {
                $("#message").html("YOU LOSE...");
                $("#bet").text(0);
                let key = Number($("#credit").text());
                let value = Number($("#bet").text());

                if(key == 0){
                    $("#message").html("GAME OVER...");
                    localStorage.clear();
                }else {
                     localStorage.clear();
                 localStorage.setItem(key,value);
                }

            setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }

    }
})

//データ引き継ぎ
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    $("#credit").text(key);
}

//リセットボタン
$(".reset").on("click",function(){
    localStorage.clear();
    location.reload();
})


