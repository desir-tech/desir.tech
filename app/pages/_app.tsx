
import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";
import "@libs/animations.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';


import type { ApplicationProps } from "@typings/Application";
import {
  RecoilRoot
} from 'recoil';



export default function Application({ Component, pageProps }: ApplicationProps) {

  const { PageLayout } = Component?.layout ?? <></>

  return (
    <RecoilRoot>
      <PageLayout {...pageProps.page.layout}>
        <Component {...pageProps} />
      </PageLayout>
    </RecoilRoot>

  )
}

