const countTodoListDone = require('./main.js')
const todoList = require('./todoList.js')

describe("todoList", () => {
    test("check null or undefind", () => {
      expect(countTodoListDone(null)).toEqual(-1)
      expect(countTodoListDone(undefined)).toEqual(-1)
    });
    test("check array input is empty", () => {
      expect(countTodoListDone([])).toEqual([])
    });
    test("check count todoList", () => {
        expect(countTodoListDone(todoList)).toBe(6)
    })
  });