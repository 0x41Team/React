/**
 * Created by lephuhai on 8/11/15.
 */
"use strict";

var data = [
    {
        answer: [{
            answer_text: "show syntax",
            id: "1"
        }, {
            answer_text: "syntax show",
            id: "2"
        },{
            answer_text: "syntax on",
            id: "3"
        }],
        html: "<p>Để highlight cú pháp trong VIM, thì gõ lệnh nào?</p>",
        quiz_id: "21",
        type: 0
    },{
        answer: [{
            answer_text: "vim có thể soạn thảo qua terminal",
            id: "68"
        }, {
            answer_text: "nano không soạn thảo được qua terminal",
            id: "67"
        },{
            answer_text: "WebStorm cần phải cài Java JDK mới chạy được",
            id: "66"
        }],
        html: "<p>Hãy chọn đáp án đúng (có thể có nhiều lựa chọn)</p>",
        quiz_id: "19",
        type: 1
    }
];


var QuizApp = React.createClass({
   render: function() {
       return (
           <div className="modal fade" id="quiz-modal" tabindex="-1" aria-hidden ="true">
                <div className="modal-dialog">
                    <Quiz quiz={data}/>
                </div>
           </div>
       )
   }
});




var Header = React.createClass({
    render: function() {
        return (
            <div className="modal-header">
                <div className="row">
                    <div className="col-md-12">
                        <div className="info-bar">
                            <i className="fa fa-info-circle" data-toggle="tooltip" data-placement="right" title="Bấm phím số để chọn câu trả lời, bấm Enter để kiểm tra hoặc chuyển câu hỏi kế tiếp"></i>
                        </div>
                        <ProgressBar />
                        <HearBar />
                    </div>
                </div>
            </div>
        )
    }
});

var Body = React.createClass({
    render: function() {
        return (
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="quiz-content">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
});


var HeartBar = React.createClass({
    getInitialStates: function() {
        return {
            answered: null,
            theEnd: null
        }
    },
    render: function() {
        var html = [];
        for (var i=0; i < this.props.numberQuiz; i++) {
            html.push(
                <span className="heart-red"><i className="fa fa-heart fa-2s"></i></span>
            )
        }
        return (
            <div className="heartBar">
                <div className="heart-bar text-center" data-toggle="tooltip" data-placement="bottom" title="Bạn có 3 trái tim, trả lời sai mỗi câu mất 1 trái tim, giữ tối thiểu 1 trái tim để qua bài kiểm tra!">
                    <span className="heart-red"><i className="fa fa-heart fa-2x"></i></span>
                    <span className="heart-red"><i className="fa fa-heart fa-2x"></i></span>
                    <span className="heart-red"><i className="fa fa-heart fa-2x"></i></span>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-lable="Close">
                    <span aria-hidden="true">&time;</span>
                </button>
            </div>
        )
    }
});


var checkAnswer = function() {
    return false;
};

var ProgressBar = React.createClass({
    render: function() {
        var progress = $('.progressbar');
        var html = [];
        for (var i=0; i < this.props.numberQuiz; i++) {
            html.push(
                <div className="bar-divider"></div>
            )
        }
        return (
            <div className="progressbar" data-perc="0">
                <div className="bar-index">0</div>
                <div className="bar"><span></span></div>
                <div className="divider-group">{html}</div>
                <div className="bar-max">{this.props.numberQuiz}</div>
            </div>
        )
    }
});

var ButtonControl = createClass({
    getInitialState: function() {
        return {
            isTest: true,
            userAnswer: []
        }
    },
    render: function() {
        if (checkAnswer) {

        }
        return (
            <div className="buttonControl">
                <button id="btnCheckQuiz" type="button" className="btn btn-success btn-lg btn-flat">
                    <i className="fa fa-question-circle"></i> Kiểm tra
                </button>
                <button id="btnNextQuiz" type="button" className="btn btn-success btn-lg btn-flat hidden">
                    <i className="fa fa-question-circle"></i> Tiếp tục
                </button>
            </div>
        )
    }
});


var Quiz = React.createClass({
    getInitialState: function() {
        return {
            userAnswer: [],
            quizIndex: 0,
            type: this.props.data.type
        }
    },
    componentDidMount: function() {
        // Show
    },
    setAnswer: function(event) {
        var answer = this.props.userAnswer;
        if (type == 0) {
            answer[0] = event.target.value;
        } else {
            var indexSelected = answer.indexOf(event.target.value);
            if (indexSelected ==! -1) {
                answer.push(event.target.value);
            }
        }

        this.props.setAnswer(answer);
    },

    nextQuestion: function() {

    },
    checkAnswer: function() {
        if (this.state.userAnswer.length > 0) {

        }
    },

    render: function() {
        var content = [];
            content.push(<Header {this.props.numberQuiz}/>);
            content.push(<Body quizIndex={this.state.quizIndex}  />);
            content.push(<Footer userAnswer={this.state.userAnswer} checkAnswer={this.checkAnswer} nexQuestion={this.nextQuestion}/>);

        return (
            <div className="quiz">{content}</div>
        )
    }
});

var Footer = React.createClass({
    checkAnswer: function() {
        this.props.checkAnswer();
    },
    nextQuestion: function() {
        this.props.nextQuestion();
    },

    showCorrect: function() {
        $('#quiz-modal .modal-footer').removeClass('incorrect').addClass('correct');
        $('#quiz-modal .modal-footer').prepend('<div class="result pull-left"><span class="badge-quiz"><i class="fa fa-check fa-4x"></i></span><h2>Chính xác</h2></div>');
    },
    showIncorrect: function() {
        $('#quiz-modal .modal-footer').addClass('incorrect').removeClass('correct');
        $('#quiz-modal .modal-footer').prepend('<div class="result pull-left false"><span class="badge-quiz"><i class="fa fa-close fa-4x"></i></span><h2>Sai</h2></div>');

    },
    render: function() {
        if (this.props.userAnswered == -1) {
            // Tra loi sai
        }

        return (
            <div className="modal-footer">
                <buttonControl />
            </div>
        )
    }
});

React.render(<QuizApp data={data} />, document.getElementById('quiz'));