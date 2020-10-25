const sayTime = require("../solution")

describe("sayTime", () => {
  const numHours = 24
  const numMinutes = 59
  const USE_MILITARY_TIME = true

  describe("It is <hour> o'clock am/pm", () => {
    for (let i = 0; i < numHours; i++) {
      let timeString = `${i + 1}:00`
      it(`can say ${timeString}`, () => {
        expect(sayTime(timeString)).toMatchSnapshot()
      })
    }
  })

  describe("It is <hour> oh <minute> am/pm", () => {
    for (let i = 0; i < numMinutes; i++) {
      let minuteString = i + 1 > 9 ? `${i + 1}` : `0${i + 1}`
      let amTimeString = `1:${minuteString}`
      let pmTimeString = `19:${minuteString}`

      it(`can say ${amTimeString}`, () => {
        expect(sayTime(amTimeString)).toMatchSnapshot()
      })

      it(`can say ${pmTimeString}`, () => {
        expect(sayTime(pmTimeString)).toMatchSnapshot()
      })
    }
  })

  describe("military time", () => {
    describe("It is <hour> o'clock", () => {
      for (let i = 0; i < numHours; i++) {
        let timeString = `${i + 1}:00`
        it(`can say ${timeString}`, () => {
          expect(sayTime(timeString, USE_MILITARY_TIME)).toMatchSnapshot()
        })
      }
    })

    describe("It is <hour> <minute> <minute>", () => {
      for (let i = 0; i < numMinutes; i++) {
        let minuteString = i + 1 > 9 ? `${i + 1}` : `0${i + 1}`
        let amTimeString = `4:${minuteString}`
        let pmTimeString = `21:${minuteString}`

        it(`can say ${amTimeString}`, () => {
          expect(sayTime(amTimeString, USE_MILITARY_TIME)).toMatchSnapshot()
        })

        it(`can say ${pmTimeString}`, () => {
          expect(sayTime(pmTimeString, USE_MILITARY_TIME)).toMatchSnapshot()
        })
      }
    })
  })
})
