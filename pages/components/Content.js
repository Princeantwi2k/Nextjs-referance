import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { FileCopy, InfoOutlined,HouseOutlined,ArrowUpward } from "@material-ui/icons";
import { PersonOutline } from "@material-ui/icons";
import { faClock, faClockFour ,faChartBar} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto'
import pic from "../../Image/pic1.png"
import pic1 from "../../Image/day.png"
import pic2 from "../../Image/day2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//data for bar chart
const data = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	datasets: [
		{
			label: "Sales/ month",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};

//doughnut chart data set

const data1 = {
	labels: ["Organic", "Social Media", "Websites"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};



function Content() {
	return (
		<>
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
					<p className={styles.generalIcon}> <FileCopy className={styles.icon} /></p>	
						<p className={styles.categoriesText}>Used space <br /><span className={styles.categoriesNumber}>40/50 GB</span></p>
						

						
					</div>
					
				</div>
				<div className={styles.tabs}>
				<div className={styles.categories}>
					<p className={styles.generalIcon1}> <HouseOutlined className={styles.icon} /></p>	
						<p className={styles.categoriesText}>Revenue <br /><span className={styles.categoriesNumber}>$34,254</span></p>

					</div>
					
				</div>
				<div className={styles.tabs}>
				<div className={styles.categories}>
					<p className={styles.generalIcon2}> <InfoOutlined className={styles.icon} /></p>	
						<p className={styles.categoriesText}>Fixed issues <br /><span className={styles.categoriesNumber}>75</span></p>
						
					</div>
				</div>
				<div className={styles.tabs}>
				<div className={styles.categories}>
					<p className={styles.generalIcon3}> <PersonOutline className={styles.icon} /></p>	
						<p className={styles.categoriesText}>Followers <br /><span className={styles.categoriesNumber}>+245</span></p>
						
					</div>
				</div>
			</div>


   
		


			{/* chart started  */}
			{/* <div className={styles.charts}>
				<div className={styles.bar}> 
					<h2>Sales</h2>
					<Line data={data} width={400} height={400} />
				</div>
				<div className={styles.circle}>
					<h2>Customers Arrived</h2>
					<Doughnut data={data1} width={400} height={400} />
				</div>
			</div> */}
			
		</div>
<div className={styles.data}>
		<div className={styles.datawrapper}>
			<div className={styles.dataChart}>
				<div className={styles.Image}>
				<Image src={pic} width={400} height={200}  className={styles.Image} alt="the chart"/> 
				</div>
	
						<p className={styles.chartParagragh} >Daily Sales</p>
						<p className={styles.chartSecondParagragh}> <ArrowUpward /> 55% <span >increse in today sales.</span> </p>
						
						<p className={styles.chartThirdParagragh} > <span><FontAwesomeIcon icon={faClockFour} width={11} /></span> updated 4 minutes ago </p>
						
					</div>
			<div className={styles.dataChart}>
			<div className={styles.Image}>
				<Image src={pic1} width={400} height={200}  className={styles.Image} alt="the chart"/> 
				</div>
						<p className={styles.chartParagragh} >Email Subscriptions</p>
						<p className={styles.chartSecondParagragh}>  Last Campaign Performance</p>
						
						<p className={styles.chartThirdParagragh} > <span><FontAwesomeIcon icon={faClockFour} width={11} /></span> campaign sent 2 days ago </p>
						
					</div>
			<div className={styles.dataChart}>
			<div className={styles.Image}>
				<Image src={pic2} width={400} height={200}  className={styles.Image} alt="the chart"/> 
				</div>
						<p className={styles.chartParagragh} >Completed Tasks</p>
						<p className={styles.chartSecondParagragh}> Last Campaign Performance</p>
						
						<p className={styles.chartThirdParagragh} > <span><FontAwesomeIcon icon={faClockFour} width={11} /></span> campaign sent 2 days ago </p>
						
					</div>
					</div>
		</div>
		</>
	);
}

export default Content;