// Define the array of activities
const osloActivities = [
  {
    title: "Justisen Reopens",
    where: "Kristian Augusts gate 14",
    when: "Friday and Saturday from 4 pm to 3 am",
    details: "The venue, considered an institution in Oslo, reopens in new premises at Universitetsgata, preserving the original furniture, decor, and pictures."
  },
  {
    title: "Vega Five Years",
    where: "Vega Scene, Hausmanns gate 28",
    when: "November 3–5",
    details: "Celebrating five years with half price on Saturday, previews, and requested reruns. Featuring the film 'How to have sex' with a preview showing on Saturday."
  },
  {
    title: "Oslo World",
    when: "October 30–November 5",
    where: "Various stages",
    details: "A music festival featuring artists from Latin America, Africa, Asia, and the Middle East. Includes concerts, talks, and club nights."
  },
  {
    title: "New Experiences in the Sauna",
    where: "Salt, Langkaia 1",
    when: "November 3–5",
    details: "Sauna festival with new saunas, cold plunges, and activities like birch twig spanking, dancing, listening, meditating, breathing, and sweating."
  },
  {
    title: "Pop-up Restaurant",
    where: "Becco, Kristian Augusts gate 11",
    when: "Friday, November 3, at 7 pm",
    details: "Wine bar Becco becomes 'Syden' for one night, offering a seven-course meal with a wine package for 1200 Norwegian kroner."
  },
  {
    title: "Photo Exhibition",
    where: "House of Photography, Rådhusgata 20",
    when: "October 26–November 26",
    details: "Exhibition of photographs by Javad Parsa, featuring images of exiled Iranians around the world."
  },
  {
    title: "Pancake Party",
    where: "Arv Coffee and Retro, Schweigaards gate 57",
    when: "Sunday from 10 am to 12 pm",
    details: "A second-hand shop and café offering a jazz and all-you-can-eat pancake buffet."
  }
];

// Event listeners for the buttons
document.getElementById('betray').addEventListener('click', function() {
  playPrisonersDilemma('tyste');
});

document.getElementById('silent').addEventListener('click', function() {
  playPrisonersDilemma('ikke tyste');
});

document.getElementById('restart').addEventListener('click', function() {
  document.getElementById('result').innerText = '';
  document.getElementById('activities').classList.add('hidden');
  document.getElementById('restart').classList.add('hidden');
});

// Function to play the Prisoner's Dilemma game
function playPrisonersDilemma(userChoice) {
  const choices = ['tyste', 'ikke tyste'];
  const partnerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';
  let activities = [...osloActivities]; // Create a copy of the full list of activities

  if (userChoice === 'tyste' && partnerChoice === 'tyste') {
    result = 'Both snitched, you get 2 days in jail.';
    // Remove "Justisen Reopens" and "Pop-up Restaurant"
    activities = activities.filter(activity => activity.title !== "Justisen Reopens" && activity.title !== "Pop-up Restaurant");
  } else if (userChoice === 'ikke tyste' && partnerChoice === 'ikke tyste') {
    result = 'Nobody snitched, you both get 1 day in jail.';
    // Remove "Pop-up Restaurant"
    activities = activities.filter(activity => activity.title !== "Pop-up Restaurant");
  } else if (userChoice === 'tyste' && partnerChoice === 'ikke tyste') {
    result = 'You snitched, but your partner didn\'t. You are free to do whatever you want.';
    // No changes to activities
  } else {
    result = 'You didn\'t snitch, but your partner did. You won an all-inclusive weekend stay in prison.';
    activities = []; // No activities if you're in prison
  }

  document.getElementById('result').innerText = result;
  updateActivitiesList(activities);
  document.getElementById('restart').classList.remove('hidden');
}

// Function to update the activities list in the HTML
function updateActivitiesList(activities) {
  const activitiesList = document.getElementById('activitiesList');
  activitiesList.innerHTML = ''; // Clear the list
  activities.forEach(function(activity) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${activity.title}</strong> - <em>${activity.when}</em> at ${activity.where}. ${activity.details}`;
    activitiesList.appendChild(listItem);
  });
  if (activities.length > 0) {
    document.getElementById('activities').classList.remove('hidden');
  }
}


