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

const handleOpen = (element: HTMLElement, index: number, active: boolean) => {
  if (active) {
    element.children[1].classList.remove('hidden');
    element.children[0].children[1].classList.add('rotate');
    element.children[0].children[0].classList.add('active')
  } else {
    element.children[1].classList.add('hidden');
    element.children[0].children[1].classList.remove('rotate');
    element.children[0].children[0].classList.remove('active');
  }
};

const displayContent = contents
  .map((e) => {
    return `
  <div class='textContentContainer'>
  <section class='textHeaderContent'>
  <p>${e.title}</p>
  <img src='../images/icon-arrow-down.svg' alt='arrowDown'/>
  <img src='./images/icon-arrow-down.svg' alt='arrowDown'/>
  </section>
  <section class='textDetailContent hidden'>
  <p>${e.content}</p>
  </section>
  </div>
  `;
  })
  .join('');

content.innerHTML = displayContent;

const textContentContainers = document.querySelectorAll('.textContentContainer');

textContentContainers.forEach((e, i) => {
  let active: boolean = false;
  const el = e as HTMLElement;
  el.addEventListener('click', () => {
    (active = !active), handleOpen(el, i, active);
  });
});
