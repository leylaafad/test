import Head from 'next/head'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test App</h1>
      </main>

      
    </div>
  )
}
export async function getServerSideProps({ req, res }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ "success": false, "message": statusCode === "404" ? "Aradığınız sayfa bulunamadı." : "Sunucularımızda yoğunluk var. Lütfen daha sonra tekrar deneyin veya @Liiuqa ile iletişime geçiniz."}))
    res.end()
  return {
    props: {},
  }
}

export default Error