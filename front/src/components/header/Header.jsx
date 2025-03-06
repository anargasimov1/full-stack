import './Header.css';

const Header = () => {
  return (
    <div className='header '>
      <ul type="none" className='nav'>
        <a href="/body"><li>Ana Səhifə</li></a>
        <a href="/login"><li>Daxil ol</li></a>
        <a href="/body"><li>Qeydiyyat</li></a>
      </ul>
    </div>
  )
}

export default Header