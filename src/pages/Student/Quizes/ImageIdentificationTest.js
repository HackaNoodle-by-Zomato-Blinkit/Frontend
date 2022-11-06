import React, { useState } from 'react';
import NavBar2 from '../../../components/NavBar2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Container } from '@mui/material';
import SampleImage from '../../../static/apple.png'
import SampleImage1 from '../../../static/bag.jpg'
import SampleImage2 from '../../../static/bird.png'
import SampleImage3 from '../../../static/books.jpg'
import SampleImage4 from '../../../static/car.jpg'
import SampleImage5 from '../../../static/chair.avif'
import SampleImage7 from '../../../static/comb.png'
import SampleImage8 from '../../../static/duck.jpg'
import SampleImage9 from '../../../static/spoon.png'
import SampleImage10 from '../../../static/three.jpg'
import axios from 'axios';
const ImageIdentificationTest = () => {
    const questions = [
		{
            image : SampleImage,
			questionText: 'Name this fruit',
			answerOptions: [
				{ answerText: 'APPLE', isCorrect: true },
				{ answerText: 'APPLƎ', isCorrect: false },
				{ answerText: 'AԳԳLE', isCorrect: false },
				{ answerText: 'APP⅃E', isCorrect: false },
			],
		},
		{
            image : SampleImage1,

			questionText: 'Identify the Given Object',
			answerOptions: [
				{ answerText: 'ႧAG', isCorrect: false },
				{ answerText: 'BAG', isCorrect: true },
				{ answerText: 'ઘAG', isCorrect: false },
				{ answerText: 'BAӘ', isCorrect: false },
			],
		},
		{
            image : SampleImage2,

			questionText: 'Identify the Given Animal',
			answerOptions: [
				{ answerText: 'BIRD', isCorrect: true },
				{ answerText: 'BIЯD', isCorrect: false },
				{ answerText: 'ઘIRD', isCorrect: false },
				{ answerText: 'BIRႧ', isCorrect: false },
			],
		},
		{
            image : SampleImage3,

			questionText: 'Identify the given object',
			answerOptions: [
				{ answerText: 'ઘOOK', isCorrect: false },
				{ answerText: 'BOOK', isCorrect: true },
				{ answerText: 'BOOﻼ', isCorrect: false },
				{ answerText: 'ઘOOﻼ', isCorrect: false },
			],
		},
        {
            image : SampleImage4,

			questionText: 'Identify the given object',
			answerOptions: [
				{ answerText: 'ɔaɹ', isCorrect: false },
				{ answerText: 'ɔar', isCorrect: false },
				{ answerText: 'caɹ', isCorrect: false },
				{ answerText: 'car', isCorrect: true },
			],
		},
        {
            image : SampleImage5,

			questionText: 'Identify the given object',
			answerOptions: [
				{ answerText: 'CHAIЯ', isCorrect: false },
				{ answerText: 'ƆHAIR', isCorrect: false },
				{ answerText: 'CHAIR', isCorrect: true },
				{ answerText: 'ƆHAIЯ', isCorrect: false },
			],
		},
        {
            image : SampleImage7,

			questionText: 'Identify the given object',
			answerOptions: [
				{ answerText: 'COMઘ', isCorrect: false },
				{ answerText: 'COMB', isCorrect: true },
				{ answerText: 'ƆOMB', isCorrect: false },
				{ answerText: 'ƆOMઘ', isCorrect: false },
			],
		},
        {
            image : SampleImage8,

			questionText: 'Identify the Given Animal',
			answerOptions: [
				{ answerText: 'DUCK', isCorrect: true},
				{ answerText: 'DUƆK', isCorrect: false },
				{ answerText: 'ႧUCK', isCorrect: false },
				{ answerText: 'ႧUƆK', isCorrect: false },
			],
		},
        {
            image : SampleImage9,

			questionText: 'Identify the Given Object',
			answerOptions: [
				{ answerText: 'ƧPOON', isCorrect: false },
				{ answerText: 'SPOON', isCorrect: true },
				{ answerText: 'SPOOИ', isCorrect: false },
				{ answerText: 'SPOON', isCorrect: false },
			],
		},
        {
            image : SampleImage10,

			questionText: 'Identify the Given Number',
			answerOptions: [
				{ answerText: 'THЯƎƎ', isCorrect: false },
				{ answerText: 'THRƎƎ', isCorrect: false },
				{ answerText: 'THЯEE', isCorrect: false },
				{ answerText: 'THREE', isCorrect: true },
			],
		},
	];
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			
		}
	};
    return(
        <>
        <NavBar2/>
        {showScore ? (
            <>
				<Typography fontWeight={"bold"} sx={{my:5}} align="center" variant="h3">
					You scored {score} out of {questions.length}
                    </Typography>
                    <Button  size="large" variant="contained" color="success" sx={{marginLeft:'750px'}}
					 onClick={()=>{
						//here send the score to backend through the api
						var data = JSON.stringify({
							"score": score,
							"type_of_test": "Object Classification Test"
						});
						
						var config = {
							method: 'post',
							url: 'http://localhost:8000/score/',
							headers: { 
							'Authorization':`Token ${localStorage.getItem('token')}`,
							'Content-Type': 'application/json'
							},
							data : data
						};
						
						axios(config)
						.then(function (response) {
							console.log(JSON.stringify(response.data));
							console.log('data sent checkout')
						})
						.catch(function (error) {
							console.log(error);
						});
			
					 }}
					>Submit your Score</Button>
            </>
			) : (
				<>
                <Container align="center" sx={{my:5}}>
					 <Card sx={{ width: 800,height : 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height : '400px',
            width : '400px',
          }}
          image={questions[currentQuestion].image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Question {currentQuestion + 1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {questions[currentQuestion].questionText}
          </Typography>
        </CardContent>
      </CardActionArea>
      {questions[currentQuestion].answerOptions.map((answerOption) => {
            return(
                <>
                <Button onClick={()=>{
                    if(answerOption.isCorrect){
                        setScore(score + 1);
                    }
                }} sx={{display:'block'}} variant="contained" color="success" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                <br/>
                </>
            )
    })}
    </Card>
    </Container>
				</>
			)}
		</>
    )
}
export default ImageIdentificationTest;