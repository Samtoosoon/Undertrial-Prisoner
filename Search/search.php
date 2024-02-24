
//Retrieve Form Data
$search_name = $_POST['search_name'];
$search_specialization = $_POST['search_specialization'];
// Add more search criteria variables as needed

//Use MySQLi or PDO to establish a connection to your MySQL database.
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Construct SQL Query:
//Build an SQL query based on the search criteria provided by the user. Use prepared statements to prevent SQL injection attacks.
$sql = "SELECT * FROM lawyers WHERE 1=1"; // 1=1 is used to simplify adding conditions

if (!empty($search_name)) {
    $sql .= " AND name LIKE '%$search_name%'";
}

if (!empty($search_specialization)) {
    $sql .= " AND specialization = ?";
}

//Prepare and Bind Parameters (if using prepared statements):
//If you're using prepared statements, prepare the SQL query and bind parameters to prevent SQL injection attacks.
$stmt = $conn->prepare($sql);

if (!empty($search_specialization)) {
    $stmt->bind_param("s", $search_specialization);
}

//Execute Query and Retrieve Results:
//Execute the SQL query and retrieve the search results from the database.
$result = $stmt->execute();

if ($result === false) {
    die("Error executing query: " . $conn->error);
}

$search_results = $stmt->get_result();

//Display Search Results:
//Iterate over the search results and display them on the webpage.
if ($search_results->num_rows > 0) {
    while ($row = $search_results->fetch_assoc()) {
        echo "Name: " . $row["name"] . " - Specialization: " . $row["specialization"] . "<br>";
        // Display other relevant information
    }
} else {
    echo "No results found";
}

//Close the Database Connection:
$conn->close();
