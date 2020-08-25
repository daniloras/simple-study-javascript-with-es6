/**
 * operator REST
 */

const blog = {
  title: "Minha Página",
  description: "Minha Descrição",
  slug: "minha-pagina.html",
};

// aplication 1

const { title, ...rest } = blog;

console.log(title); // Minha Páinga
console.log(rest); // {description: "Minha Descrição", slug: "minha-pagina.html"}

// aplication 2

const pagesBlogs = [1, 2, 3, 4];

const [a, b, ...c] = pagesBlogs;

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4]

// aplication 3
function sumPageBlog(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sumPageBlog(1, 2, 3)); // 6
