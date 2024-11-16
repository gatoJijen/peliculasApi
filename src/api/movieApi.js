const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJiNjdkOWE0YjdhMzY5MTg2OGZkMGQyMmI4MDJkNSIsIm5iZiI6MTczMTE2MjkwOC4xMDE4OTgsInN1YiI6IjY3MmY2YWE4M2QxYjE5YmYzZGJjMjgxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCXymQuHnyB2y-CVEuCGQg_EtDBd76RF8Hz0kuh3srU'
    }
  };

export const solicitud = async (url) => {
    try {
        let respuesta = await fetch(url, options)
        let datos = await respuesta.json()
        return datos
    } catch (error) {
        console.error("A habido un error al intentar conectarse con la api")
    }


}