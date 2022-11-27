import layout from "@configs/layout"
import links from "@db/links"
import meta from "@db/meta"
import type { PageQueryProps } from "@typings/Page"

const pages = ({ store, key }: PageQueryProps) => {

    const { getLinks, getPageLinks } = links(store)
    const { getFavicon } = meta(store)


    const pageData = {

        home: {
            metaData: {
                pageTitle: "Home"
            },
            data: {
                hero: {
                    title: "Desir Tech",
                    cover: {
                        src: "/assets/images/hacker.svg"
                    }

                }
            },
        }
    }

    const pageObject = {
        version: Date.now(),
        metaData: {},
        data: pageData[key]?.data,
        layout: layout({
            header: {
                links: getLinks().map((link) => ({
                    name: link?.name ?? "NOT_FOUND",
                    url: link?.url ?? "#"
                })).splice(0,4)
            },
            footer: {
                copyright: 'LOL'
            }

        })

    }

    return { ...pageObject }
}

export default pages