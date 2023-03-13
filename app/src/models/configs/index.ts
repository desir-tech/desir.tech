import { NotionService } from "@services/notion"
import { configs as BlackprintConfigs } from "@utils/blackprint"
import { metaCollection, writingsCollection } from "@db/index"

const { defineDatabaseConfiguration } = BlackprintConfigs()

export const notionCMS = defineDatabaseConfiguration({
    keys: {
        title: "🪪Title",
        favicon: "Favicon",
        featured: "🌟Featured",
        obfuscator: "🗝️Obfuscator",
        heading: "#️⃣Heading",
        portfolio: "💼Portfolio",
        copyright: "📜Copyright",
        phone: "📞Phone",
        email: "📧Email"
    },
    params: {
        collections: {
            meta: metaCollection,
            portfolio: metaCollection,
            writings: writingsCollection,
        },
    },

    init: async (params) => {

        const { getNotionPages } = NotionService().methods

        const pageIds = Object.keys(params.collections).map((param) => (
            {
                id: params.collections[param]().meta.notionPageId,
                name: param
            }
        ))

        return await getNotionPages({ pageIds })
    }
})






