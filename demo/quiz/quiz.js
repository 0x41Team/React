/**
 * Created by lephuhai on 8/11/15.
 */
"use strict";

// React Documentation "refs" :https://facebook.github.io/react/docs/working-with-the-browser.html


var Header = React.createClass({
    render: function() {
        return (
            <div className="modal-header">
                <div className="row">
                    <div className="col-md-12">
                        <div className="info-bar">
                            <i className="fa fa-info-circle" data-toggle="tooltip" data-placement="right" title="Bấm phím số để chọn câu trả lời, bấm Enter để kiểm tra hoặc chuyển câu hỏi kế tiếp"></i>
                        </div>
                        <ProgressBar numberQuiz={this.props.numberQuiz}/>
                        <HeartBar />
                    </div>
                </div>
            </div>
        )
    }
});


// FIXME
var Body = React.createClass({
    render: function() {
        var html = [];
        var question = this.props.question;
        var answer = question[0].answer;
        if (question.type == 0) {
            for (let i = 1; i <= Object.keys(answer).length; i++ ) {
                html.push(
                    <div className="quiz-answer" key={this.props.quizIndex + "-" + i}>
                        <input type="radio" name="single-quiz" value={Object.keys(answer)[i - 1]}/>
                        {answer[i]}
                    </div>
                )
            }
        } else if (question.type == 1) {
            for (let i = 1; i <= Object.keys(answer).length; i++ ) {
                html.push(
                    <div className="quiz-answer" key={this.props.quizIndex + "-" + i}>
                        <input type="checkbox" name="single-quiz" value={Object.keys(answer)[i - 1]}/>
                        {answer[i]}
                    </div>
                )
            }
        } else {
            html.push(<div className="quiz-answer"></div>)
        }

        return (
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="quiz-content">{html}</div>
                    </div>
                </div>
            </div>
        )
    }
});


var HeartBar = React.createClass({
    render: function() {
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



var Quiz = React.createClass({
    getInitialState: function() {
        return {
            question: this.props.data,
            numberQuiz: this.props.data.length,
            indexQuiz: 0,
            userAnswer: null
        }
    },
    showModal: function() {
        $('#quiz-modal').on('show.bs.modal', function(e) {

        })
    },
    setProgressBar: function() {
        var progress = $('.progressbar');
      if (this.props.numberQuiz > 1) {
          var weight = parseInt(progress.css('width')) / 100;
          for (var i = 0; i < this.props.numberQuiz - 1; i++) {
              this.props.length ="width: " + Math.ceil(parseInt(100 / this.props.numberQuiz * (i + 1)) * weight * 0.99) + "px";
              var divider = '<div className="bar-divider" style={this.props.length} </div>';
              $('.divider-group').append(divider);
          }
      }
    },

    //setAnswer: function(event) {
    //    var answer = this.props.userAnswer;
    //    if (type == 0) {
    //        answer[0] = event.target.value;
    //    } else {
    //        var indexSelected = answer.indexOf(event.target.value);
    //        if (indexSelected ==! -1) {
    //            answer.push(event.target.value);
    //        }
    //    }
    //
    //    this.props.setAnswer(answer);
    //},
    render: function() {
        var content = [];
            content.push(<Header numberQuiz={this.state.numberQuiz}/>);
            content.push(<Body question={this.state.question}/>); // TODO
            content.push(<Footer numberQuiz={this.state.numberQuiz} indexQuiz={this.state.indexQuiz} />);

        return (
            <div>
                <div className="modal fade" id="quiz-modal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">{content}</div>
                </div>
                <button className="btn btn-primary">Start Quiz</button>
            </div>
        )
    }
});

// FIXME LOGICAL
var Footer = React.createClass({
    getInitialState: function() {
      return {
          isContinued: false
      }
    },

    handleClick: function() {
        this.setState({isContinued: !this.state.isContinued})
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
        var html = [];
        if (this.props.indexQuiz <= this.props.numberQuiz) {
            if (this.state.isContinued) {
                html.push(
                    <button id="btnNextQuiz" type="button" className="btn btn-success btn-lg btn-flat hidden">
                        <i className="fa fa-question-circle"></i> Tiếp tục
                    </button>
                )
            } else {
                html.push(
                    <button id="btnCheckQuiz" type="button" className="btn btn-success btn-lg btn-flat">
                        <i className="fa fa-question-circle"></i> Kiểm tra
                    </button>
                )
            }
        }
        return (
            <div className="modal-footer">{html}</div>
        )
    }
});
