interface Usuario {
    username: string;
    email: string;
    isAdmin: boolean;
  }
  
  const user: Usuario = {
    username: "nat",
    email: "nat@gmail.com",
    isAdmin: true,
  };
  
  console.log(`${user.username} tiene permisos de administrador: ${user.isAdmin}`);