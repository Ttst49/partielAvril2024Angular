export class GlobalConstants{

  public static baseUrl = "http://localhost:8000/api/"
  public static token = localStorage.getItem("bearerToken")

  public static isLoggedIn(){
    return localStorage.getItem("bearerToken") != null
  }
}
