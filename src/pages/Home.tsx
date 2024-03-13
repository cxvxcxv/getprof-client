import { Link } from 'react-router-dom';
import welcomeBannerImg from '../assets/welcomeBanner.png';
import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<section className={styles.home}>
			<div className={styles.welcomeBanner}>
				<img src={welcomeBannerImg} alt='' />
				<h1>
					Your <span>dream</span> university - a <span>reality</span>
				</h1>
			</div>
			<div className={styles.about}>
				<h2>GetProf</h2>
				<p>
					Наш сайт создан для того, чтобы помогать ученикам школ выбрать
					подходящий университет, используя различные критерии. На данный момент
					вы можете найти информацию по некоторым университетам городов
					Казахстана, проект будет расширяться.
				</p>
			</div>
			<Link to='/filter' className={styles.button}>
				Найти Университет
			</Link>
		</section>
	);
};

export default Home;
