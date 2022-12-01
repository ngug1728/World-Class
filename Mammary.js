const root = ReactDOM.createRoot(document.getElemenById('root'));
export function Library(repo,language) {
  console.log("${repo} ${language}")
}
export default function App(){
return (<Library />)
}
