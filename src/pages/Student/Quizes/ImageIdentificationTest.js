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
import SampleImage6 from '../../../static/check.jpg'
import SampleImage7 from '../../../static/comb.png'
import SampleImage8 from '../../../static/duck.jpg'
import SampleImage9 from '../../../static/spoon.png'
import SampleImage10 from '../../../static/three.jpg'
const ImageIdentificationTest = () => {
    const questions = [
		{
            image : SampleImage,
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
            image : SampleImage1,

			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
            image : SampleImage2,

			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
            image : SampleImage3,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage4,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage5,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage6,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage7,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage8,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage9,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
            image : SampleImage10,

			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
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
                    <Button  size="large" variant="contained" color="success" sx={{marginLeft:'750px'}}>Submit your Score</Button>
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