const defaultDataset = {
    init: {
        answers: [
            { content: "あなたについて知りたい", nextId: "community" },
            { content: "仕事を依頼したい", nextId: "job_offer" },
            { content: "グローブについて相談したい", nextId: "consultant" },
            { content: "お友達になりたい", nextId: "dating" }
        ],
        question: "こんにちは！ご用件はなんでしょうか？"
    },
    job_offer: {
        answers: [
            { content: "Webサイトを制作してほしい", nextId: "website" },
            { content: "Webアプリを開発してほしい", nextId: "webapp" },
            {
                content: "自動化ツールを作ってほしい",
                nextId: "automation_tool"
            },
            { content: "その他", nextId: "other_jobs" }
        ],
        question: "どのようなお仕事でしょうか？"
    },
    website: {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "Webサイト細作についてですね。コチラからお問い合わせできます。"
    },
    webapp: {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "Webアプリ開発についてですね。コチラからお問い合わせできます。"
    },
    automation_tool: {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "自動化ツール開発についてですね。コチラからお問い合わせできます。"
    },
    other_jobs: {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "その他についてですね。コチラからお問い合わせできます。"
    },
    consultant: {
        answers: [
            {
                content: "どんなメーカーか知りたい",
                nextId: "https://parser.jp/"
            },
            {
                content: "お手入れ方法について知りたい",
                nextId: "https://parser.jp/care"
            },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。"
    },
    community: {
        answers: [
            {
                content: "ポートフォリオを見る",
                nextId: "https://shun21.xsrv.jp/"
            },
            // {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "初めまして、谷﨑です。彫刻師→グラブ職人→エンジニアと渡り合ってきました。"
    },
    community_activity: {
        answers: [
            {
                content: "さらに詳細を知りたい",
                nextId: "https://youtu.be/tIzE7hUDbBM"
            },
            {
                content: "コミュニティに参加したい",
                nextId: "https://torahack.web.app/community/"
            },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question:
            "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。"
    },
    dating: {
        answers: [
            { content: "DMする", nextId: "https://shun21.xsrv.jp/contact/" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "まずは一緒にランチでもいかがですか？お気軽にDMください😄"
    }
};

export default defaultDataset;
