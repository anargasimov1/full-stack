import './Header.css';

const Header = () => {
  return (
    <div className='header '>
      <ul type="none" className='nav'>
        <a href="/login"><li>Daxil ol</li></a>
        <a href="/register"><li>Qeydiyyat</li></a>
        
      </ul>
      <h1 className='text'>
        Xoş Gəlmisiniz davam etmək üçün daxil olun və ya qeydiyyatdan keçin
      </h1>
    </div>
  )
}

export default Header