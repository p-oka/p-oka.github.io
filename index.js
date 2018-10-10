document.addEventListener("DOMContentLoaded", function() {
  window.fcWidget.init({
    token: "3f7b8ceb-c6e9-4240-90e7-ef27f947d7c5",
    host: "https://wchat.freshchat.com",
    config: {
      content: {
        headers: {
          chat: 'チャットで問い合わせ',
          chat_help: 'お困りのことがあればチャットでお問い合わせください。',
          push_notification: '返信が来たらプッシュ通知で知らせますか？',
          channel_response: {
            offline: '恐れ入りますが、現在対応時間外です。support@soelu.comまでご連絡くださいませ。',
            online: {
              minutes: {
                one: "なるべく早くスタッフが返信いたします！",
                more: "なるべく早くスタッフが返信いたします！"
              },
              hours: {
                one: "なるべく早くスタッフが返信いたします！",
                more: "なるべく早くスタッフが返信いたします！",
              }
            }
          }
        },
        placeholders: {
          reply_field: 'こちらに記入してください',
        }
      }
    }
  });
});
