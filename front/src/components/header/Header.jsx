import './Header.css';

const Header = () => {
  return (
    <div className='header '>
      <ul type="none" className='nav'>
        <a href="/body"><li>Ana Səhifə</li></a>
        <a href="/login"><li>Daxil ol</li></a>
        <a href="/register"><li>Qeydiyyat</li></a>
        <a href="/profile">profile</a>
      </ul>
    </div>
  )
}

export default Header