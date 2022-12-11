import './Login.css';

function Login() {
  return (
    <div>
        <form class="form">
        <h2>Login</h2>
        <div>
            <input type="text" Classname="name" id="name" placeholder="Name"/>
        </div>
        <div>
            <input type="password" Classname="password" id="password" placeholder="Password"/>
        </div>
        <div class="button">
            <a href="#">LOGIN</a>
        </div>
        <div class="ask">
            <a href="">
                <p>Not a member?<span>Create Account</span></p>
            </a>
        </div>
    </form>
    </div>
  );
}

export default Login;
