module.exports = {
  rules: {
    'check-commit-message': [2, 'always'],
  },
  plugins: [{
    rules:
    {
      'check-commit-message': ({ header }) => {
        const regex = /^\[(NFT)-\d+] (feat|fix|docs|style|refactor|test|chore): .*$/
        return [regex.test(header),
        'Please check whether your submission conforms to the specification -> \n' +
        '[(NFT)-{0-9}] (feat|fix|docs|style|refactor|test|chore): ***** ']
      }
    }


  }]

}
