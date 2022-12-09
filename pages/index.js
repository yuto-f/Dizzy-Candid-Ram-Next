import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>フジタユウト | Links</title>
          <meta
            name="description"
            content="1997年新潟生まれ。独学でデザインを学んだ後、都内のデザインエージェンシーPLUS-Dに入社。ブランディング・デジタル・グラフィックと幅広い領域のクライアントワークに携わる。会社勤務の傍ら、2020年よりフリーランスとしても活動開始。\n    2022年に株式会社シンクを設立。同社代表取締役。"
          />
          <meta property="og:title" content="フジタユウト | Links" />
          <meta
            property="og:description"
            content="1997年新潟生まれ。独学でデザインを学んだ後、都内のデザインエージェンシーPLUS-Dに入社。ブランディング・デジタル・グラフィックと幅広い領域のクライアントワークに携わる。会社勤務の傍ら、2020年よりフリーランスとしても活動開始。\n    2022年に株式会社シンクを設立。同社代表取締役。"
          />
        </Head>
        <div className="home-body">
          <div className="home-name">
            <span className="home-text">Yuto Fujita</span>
            <span className="home-text1">SHINK Inc. CEO / Designer</span>
          </div>
          <div className="home-links">
            <a
              href="https://www.youtube.com/channel/UC01lvQi26d2XogE2yDucRjQ"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link list-item"
            >
              YouTube
            </a>
            <a
              href="https://twitter.com/_yutof"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1 list-item"
            >
              <span>Twitter</span>
              <br></br>
            </a>
            <a
              href="https://www.instagram.com/_yutof/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2 list-item"
            >
              Instagram
            </a>
            <a
              href="https://room.rakuten.co.jp/yutolog/items"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3 list-item"
            >
              Rakuten ROOM
            </a>
            <a
              href="https://note.com/yuto_fujita"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4 list-item"
            >
              <span>note</span>
              <br></br>
            </a>
            <a
              href="https://shink-jp.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5 list-item"
            >
              SHINK Inc.
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-body {
            width: 100%;
            display: flex;
            padding: 10% 10% 0 10%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            font-size: 12px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
          }
          .home-text1 {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12px;
            margin-top: 8px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
          }
          .home-links {
            width: 100%;
            display: flex;
            margin-top: 64px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link {
            font-size: 12px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          .home-link1 {
            font-size: 12px;
            margin-top: 40px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          .home-link2 {
            font-size: 12px;
            margin-top: 40px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          .home-link3 {
            font-size: 12px;
            margin-top: 40px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          .home-link4 {
            font-size: 12px;
            margin-top: 40px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          .home-link5 {
            font-size: 12px;
            margin-top: 40px;
            font-family: Roboto;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-body {
              width: 100%;
              height: auto;
              padding: 64px 10% 0 10%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
