import React from 'react';
// import '../index.scss'


class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
           () => this.tick(), 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
      return (
          <div className="section">
               <div className="container max-auto px-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <h1 className='text-red-400 py-2 text-5xl text-center  font-semibold '>Hello, world!</h1>
            <h2 className='mb-4'>It is {this.state.date.toLocaleTimeString()}.</h2>

            <div className='relative h-32 w-32 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 my-10'>
                <div className="absolute h-14 w-14 z-0 bg-gradient-to-r from-red-400 to-red-700 rounded-xl -top-4 -left-4 bg-gray-600">
                </div>
            </div>

            <div className="">
            <div className='w-full grid gap-4 grid-cols-3 grid-rows-2' >
               <img className='w-screen h-screen aspect-square object-cover md:mb-0 break-after-column' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover break-before-column' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square visible hover:invisible object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               <img className='w-full aspect-square object-cover' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
               
            </div>
            </div>
            </div>
        </div>
          </div>
       
      );
    }
  }
  



export default Clock;