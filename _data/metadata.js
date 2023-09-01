const url = process.env.URL ?? "https://lumirad.io";
const title = "lumiRadio";

module.exports = {
    en: {
        url,
        title,
        description: "The new home of the beloved Homestuck radio!",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/lumiRadio/lumirad.io'
        },
        author: {
            url,
            name: "lumiRadio Team",
            email: "info@cozysoft.eu",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
    },
};
