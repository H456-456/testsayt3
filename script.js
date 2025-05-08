const universitySearchButton = document.getElementById('universitySearchButton')
const enteringTheCountryName = document.getElementById('enteringTheCountryName')
const table1 = document.getElementById('table1')

var lineNumber = 0;

universitySearchButton.addEventListener('click',function() {
	//XMLHttpRequest запрос
	let request = new XMLHttpRequest()

	request.open(
		'GET',
		`http://universities.hipolabs.com/search?country=${enteringTheCountryName.value}`
	)
	request.responseType ="json"
	request.onload
	request.send()
	console.log(request)

	if (lineNumber != 0) {
		for (let i = 0; i < lineNumber; i++) {
			table1.removeChild(table1.lastElementChild)
		}
	}
//логика таблицы 
	lineNumber = data.length

	for (let ii = 0; ii < data.length; ii++) {
		let tr = document.createElement('tr'),
			td

		for (let i = 0; i < 3; i++) {
			if (i == 0) {
				td = document.createElement('td')
				td.innerHTML = data[ii].name
				tr.appendChild(td)
			} else if (i == 1) {
				td = document.createElement('td')
				td.innerHTML = data[ii].country
				tr.appendChild(td)
			} else if (i == 2) {
				td = document.createElement('td')
				td.innerHTML = data[ii].web_pages
				tr.appendChild(td)
			}
		}
		table1.appendChild(tr)
	}

	const numberTr = document.querySelectorAll('#table1 tr')
	console.log(numberTr[4])

	for (let i = 0; i < numberTr.length; i++) {
		if (i % 2) {
			numberTr[i].style.backgroundColor = '#dadadac1'
		}
	}

	console.log(
		`количество университетов в ${enteringTheCountryName.value}:`,
		data.length
	)
})

