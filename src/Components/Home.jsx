
import Card from './Card'

const Home=()=>{
    let People=[
        {
            name:'Priyankaa',
            age:20,
            learning:'Mern stack Development',
            img:'https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=ais'
        },
        {
            name:'Kinjal',
            age:22,
            learning:'CA',
            img:'https://static.vecteezy.com/system/resources/thumbnails/025/474/310/small/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg'
        },
    ]
    return<>
        
        <h2>Information About Students</h2>
        <div className='Home'>
            {People.map((data)=><Card {...data}/>)}
        </div>
    </>
}
export default Home;