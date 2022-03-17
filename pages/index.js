import Head from 'next/head';
import { withData } from '../helpers/restriction';
import { Navbar } from '../components/Navbar/Navbar';
import GetAPIData from '../helpers/get_api_data';
import HomePage from '../container/Home/HomePage';

// La page home est également un point culminant de ton app après le _app.js et _document.js
// c'est ta page home ou / si tu préfère

// renseigne toi bien sur les différentes balises que propose NextJS sur la doc
// elle te sera d'un grand secours croit moi.

const Home = () => {

  
  return (
    <>
      <Head>
        <title>Mars High Tech</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <HomePage />
    </>
  )
}

// Home.getInitialProps = async (ctx) => {
//   const { locale } = ctx;
//   const ctxQuery = ctx.query;
//   const { user: customerUser, isLoggedIn } = withData(ctx);

//   // la route doit toujours être structuré de la manière suivante

//   const apiUrl = [
//     {
//       endpoint: ``,
//       name: "homeData",
//     }
//   ];

//   const pageData = await GetAPIData(apiUrl, locale);
//   const processedData = pageData;
  
//   return { processedData, locale, isLoggedIn, ctxQuery }

//   // le return te permettra de retourner ce que tu veux avoir de la récupération des données
//   // en statique
// }

export default Home;

// Pas besoin de NavBar directement dans la page je la mettrais dans un provider qui alimentera toute l'appli
// je te montrerais sur quelles pages tu peut le faire apparaitre.

// regarde un peu dans tout les fichiers je t'ai laissé des commentaires pour t'aiguiller
// 
// attention il n'est pas forcément nécessaire d'utiliser le getInitialProps partout
// je te laisse un exemple parfait de la résultante de cette méthode sur cette page