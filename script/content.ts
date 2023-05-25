type Content = {
  title: string;
  content: string;
};
const contents: Content[] = [
  {
    title: 'How many team members can I invite?',
    content: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
  },
  {
    title: 'What is the maximum file upload size?',
    content: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  },
  {
    title: 'How do I reset my password?',
    content: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    title: 'Can I cancel my subscription?',
    content: `Yes! Send us a message and we'll process your request no questions asked.`,
  },
  {
    title: 'Do you provide additional support?',
    content: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

const content = document.querySelector('.contentHere') as HTMLDivElement;

const handleOpen = (element: HTMLElement, index: number) => {
    element.children[1].classList.toggle('hidden');
    element.children[0].children[1].classList.toggle('rotate');
    element.children[0].children[0].classList.toggle('active');
};

const displayContent = contents
  .map((e) => {
    return `
  <div class='textContentContainer'>
  <div class='textHeaderContent'>
  <p>${e.title}</p>
  <img src='./images/icon-arrow-down.svg' alt='arrowDown'/>
  </div>
  <section class='textDetailContent hidden'>
  <h2>${e.content}</h2>
  </section>
  </div>
  `;
  })
  .join('');

content.innerHTML = displayContent;

const textContentContainers = document.querySelectorAll('.textContentContainer');

textContentContainers.forEach((e, i) => {
  const el = e as HTMLElement;
  el.addEventListener('click', () => {
    handleOpen(el, i)
  });
});
