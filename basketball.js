let home_score = document.getElementById("home-score")
let guest_score = document.getElementById("guest-score")
let h_score = 0
let g_score = 0

function home_add_one() {
    h_score += 1
    home_score.textContent = h_score
}
function home_add_two() {
    h_score += 2
    home_score.textContent = h_score
}
function home_add_three() {
    h_score += 3
    home_score.textContent = h_score
}

function guest_add_one() {
    g_score += 1
    guest_score.textContent = g_score
}
function guest_add_two() {
    g_score += 2
    guest_score.textContent = g_score
}
function guest_add_three() {
    g_score += 3
    guest_score.textContent = g_score
}