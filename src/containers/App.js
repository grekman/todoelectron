
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import {Row, Col} from 'react-materialize'
import Footer from '../components/Footer'

import * as TodoActions from '../actions'

const App = props => (
  <Row>
    <Col l={6} m={8} s={12} className="main z-depth-5">
      <Header addTodo={props.actions.addTodo} />
      <MainSection {...props} />
      <Footer {...props} clearCompleted={props.actions.clearCompleted}/>
    </Col>
  </Row>
)

/*Определяем метод mapStateToProps для чтения состояния*/

const mapStateToProps = state => ({
  todos: state.todos.todos
})

/*Определяем метод mapDispatchToProps для передачи события. mapDispatchToProps отправляет действие. Это единственный способ изменить состояние.*/

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(TodoActions, dispatch)
})

/*Генерируем компонент путем передачи созданных функций в connect(). Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
