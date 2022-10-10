describe('empty spec', () => {
  it('passes', () => {
    cy.exec('npm run redis').then((result) => {
      console.log(result)
      // yields the 'result' object
      // {
      //   code: 0,
      //   stdout: "Files successfully built",
      //   stderr: ""
      // }
    });
  })
})
