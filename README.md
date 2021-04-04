### First, what is context API?

- As vezes precisamos ter acesso a vários estados diferentes em nossa aplicação e não dá pra ficar passando props de componente em componente, porque vai chegar uma hora que ela vai ficar muito confusa e complexa. Por esse motivo o context Api existe, ele cria um contexto que pode ser usado para armazenar os nossos estados e torná-los globais, sendo assim qualquer componente da aplicação pode acessá-los sem a necessidade da passagem de props. Claro que não armazenaremos todos os estados da aplicação num contexto pois é desnecessário guardar estados que são passados apenas pra um componente, e o objetivo do Context Api é nos ajudar a lidar com vários estados diferentes que iriam viajar de props em props sem ele.

---

- Sometimes we need to have access to several different states in our application and it is not possible to keep passing props from component to component, because there will come a time when it will be very confusing and complex. For this reason the context API exists, it creates a context that can be used to store our states and make them global, so that any component of the application can access them without having to pass props. Of course, we will not store all application states in a context as it is unnecessary to store states that are passed only to one component, and the purpose of the context API is to help us deal with several different states that would travel from props to props without it.

---

![image](https://user-images.githubusercontent.com/54006291/113495242-976ef980-94c6-11eb-96c1-44843d05d0c9.png)

---

![image](https://user-images.githubusercontent.com/54006291/113495250-a35abb80-94c6-11eb-83e0-6d7e004de6e2.png)
