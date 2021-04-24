import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ServicesUtils {
    public static user = JSON.parse(localStorage.getItem("currentUser"));
    public static  isAdmin : boolean = false;
    public static default_image : string = "assets/img/default.jpg";
    public static classe = ["Fondamental","Secondaire","Lycee","Universite"];
    public static profil_Enseignant = "enseignant"
    public static profil_Etudiant = "etudiant"
    public static profil_Admin = "admin"
    public static default_password = "Virtual_Impact@2020";
    public static apiUrl = 'http://localhost:8095/';
    // public static apiUrl = 'http://10.137.20.112:8095/';
    public static token = ServicesUtils.getToken();
//'Authorization':`Bearer ${AuthService.getToken()}`,
    public static headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Request-Headers':'origin, x-requested-with, accept',
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length`Bearer ${user.}`
        //'Authorization':`Bearer ${ServicesUtils.user.currentUserValue.accessToken}`,
        // 'Authorization':`Bearer ${ServicesUtils.token}`,
        
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NzA1MDMyOCwiZXhwIjoxNTg3MTM2NzI4fQ.hlJirD7ZWRvcqPDt7EM58W55J1svzOsSiazXERPus3J1CDsF3Vf_rjCIV_N0qWllGFlQj6dUcQet-AxrqpVn0A' 
    });
//"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NzA1MDMyOCwiZXhwIjoxNTg3MTM2NzI4fQ.hlJirD7ZWRvcqPDt7EM58W55J1svzOsSiazXERPus3J1CDsF3Vf_rjCIV_N0qWllGFlQj6dUcQet-AxrqpVn0A
    public static options = { headers: ServicesUtils.headers };
    public static generateCode(length): string {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public static getToken(): string{
        if(ServicesUtils.user == null) {
            return "none"
        }else{
            return ServicesUtils.user.accessToken
        }   
    }

    public static escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };  
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
}