// Com o use client se eu desativar o js com oa funcionalidade de useEffect é via client, eu não carreggo os dados da fetch

// 'use client'

// import { useEffect, useState } from 'react'

// export default function RepoList() {
//   const [repos, setPost] = useState([])

//   useEffect(() => {
//     fetch('https://api.github.com/users/AlanFerreiraDev/repos')
//       .then((res) => res.json())
//       .then((data) => setPost(data))
//   })

//   return <div>{JSON.stringify(repos, null, 2)}</div>
// }

// Posso transformar em um server component e fazer uma chamada aqui dentro, dessa forma abaixo com Static Site Generation

// export async function RepoList() {
//   const repos = await fetch(
//     'https://api.github.com/users/AlanFerreiraDev/repos',
//     // nesse caso seria anível de requisição o SSG
//     {
//       next: { revalidate: 60 /* 1 minute*/ },
//       cache: 'force-cache',
//     }
//   ).then((response) => response.json())

//   return <div>{JSON.stringify(repos, null, 2)}</div>
// }

// Posso transformar em um server component e fazer uma chamada aqui dentro, dessa forma abaixo com Server Side Generation

export async function RepoList() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const repos = await fetch(
    'https://api.github.com/users/AlanFerreiraDev/repos'
  ).then((response) => response.json())

  return <div>{JSON.stringify(repos, null, 2)}</div>
}
