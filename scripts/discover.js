async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({ data: "Data stocked!" });
            } else {
                reject("Error when fetching data.");
            }
        }, 1000);
    });
}

async function handleFetchData() {
    try {
        const response = await fetchData();
        displayData(response.data);
    } catch (error) {
        displayError(error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = data;
}

function displayError(error) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = error;
    incrementErrorCount();
}

function incrementErrorCount() {
    const errorCountContainer = document.getElementById('error-count');
    let errorCount = parseInt(errorCountContainer.textContent, 10);
    errorCountContainer.textContent = errorCount + 1;
}

document.getElementById('fetch-button').addEventListener('click', handleFetchData);