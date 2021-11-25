import Head from 'next/head'
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BetterDSB</title>
        <meta name="description" content="A better DSBMobile Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <TextField required  label="Nutzername" variant="filled" />
       <TextField required variant="filled" label="Passwort" type="password"> </TextField>
      </main>
    </div>
  )
}
