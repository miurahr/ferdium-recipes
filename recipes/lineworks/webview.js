module.exports = Ferdium => {
  const getMessages = () => {
    const elements = document.querySelectorAll(
      'div#chat_list > ul#chat_grp_lst > li#item_chat > dl#chat_count > span#new',
    );
    let count = 0;

    if (elements[0]) {
      count = Ferdium.safeParseInt(elements[0].textContent);
    }

    Ferdium.setBadge(count);
  };
  Ferdium.loop(getMessages);
}
