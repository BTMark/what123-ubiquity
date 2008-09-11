//what.cd username: corevette
//email: corevette@gmail.com

makeSearchCommand({
  name: "what.cd-torrent",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Looks up a torrent in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/torrents.php?searchstr={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search for torrents in <b>What.CD</b>"
    }
});

makeSearchCommand({
  name: "what.cd-artist",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Looks up an artist in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/torrents.php?action=advanced&artistname={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search for an artist in <b>What.CD</b>"
    }
});

makeSearchCommand({
  name: "what.cd-request",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Looks up a request in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/requests.php?search={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search for a request in <b>What.CD</b>"
    }
});

makeSearchCommand({
  name: "what.cd-forum",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Searches through the forums in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/forums.php?action=search&search={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search through the forums in <b>What.CD</b>"
    }
});

makeSearchCommand({
  name: "what.cd-log",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Searches through the logs in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/log.php?search={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search through the logs in <b>What.CD</b>"
    }
});

makeSearchCommand({
  name: "what.cd-user",
  author: {name: "Corey Farwell", email: "dewqazxc@gmail.com"},
  description: "Searches for a user in What.CD",
  icon: "https://ssl.what.cd/favicon.ico",
  url:"https://ssl.what.cd/user.php?action=search&username={QUERY}",
  preview: function( pblock ) {
    pblock.innerHTML ="Search for a user in <b>What.CD</b>"
    }
});