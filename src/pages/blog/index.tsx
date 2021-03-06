// Modules
import React from "react"
import { NextPage } from "next"
// Components
import { Layout } from "../../layouts/layout"
import { AllBlogs } from "../../components/molecules/blog/allBlogs"
import { PageNation } from "../../components/molecules/blog/pageNation"
import { AsideSection } from "../../components/molecules/blog/asideSection"
import { AllCategories } from "../../components/molecules/blog/allCategories"
// Functions
import {
  getBlogs,
  getBlogPage,
  getCategories
} from "../../functions/api"
import { blogFunctions } from "../../functions/blogFunctions"

// *************** Get API *************** //
export const getStaticPath = async () => {
const { blog } = blogFunctions()
  const { data } = await getBlogs()
  const paths = blog.getRangePath(data, 5)
  return { paths, fallback: false }
}

export const getStaticProps = async (number: number) => {
  const { data: blogs } = await getBlogPage(number)
  const { data: categories } = await getCategories()
  return { props: {
    contents: blogs.contents,
    totalCount: blogs.totalCount,
    categories: categories.contents
  }}
}

// *************** Type *************** //
type Props = {
  contents?: Array<any>
  totalCount: number,
  categories?: any
}

export const Blog: NextPage<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return(
    <Layout title="Blog">
      <main className="flex-auto">
        <AllBlogs
          list={props.contents}
        />
        <PageNation
          total={props.totalCount}
        />
      </main>
      <aside className="w-2/4 ml-12">
        <AsideSection
          title="カテゴリー"
        >
          <AllCategories
            categories={props.categories}
          />
        </AsideSection>
        <AsideSection
          title="人気の記事"
        >
         <p>fff</p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default Blog