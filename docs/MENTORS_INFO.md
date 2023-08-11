# Getting Started Instructors

This guide will help instructors set up the Web App Template for HighTechU.

## Adding Students to the HighTechU GitHub Organization

You will need to invite each HighTechU Student to the HighTechU GitHub Organization. For more information, visit "[Inviting users to join your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

> Note: It is important that HighTechU Students accept the invitation to join the organization to prevent access issues.

## Adding Students to the HighTechU Team

You will need to add each HighTechU Student to the appropriate team. Usually this team will reflect the current cohort. (For example, `Techccelerator`). For more information, visit "[Adding organization members to a team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".

## Creating the Repository

The HighTechU Web App Repository allows for GitHub users to create a new repository using this repository as a template. For more information, visit "[About repository templates](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template#about-repository-templates)".

You will need to name the new repository appropriately, with either their team or app name:

`techccelerator-react-appname`

> Note: You will create the new repository as `private`. The repository will become `public` after the program is finished.

## Repository Permissions

You will want to restrict the `main` branch. You will need to create a branch protection rule. For more information, visit "[Creating a branch protection rule](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

You will want to set up "Require pull request reviews before merging", "Required approving reviews: 1", and "Require review from Code Owners".

> Note: This is a crucial step! It is very important to limit HighTechU Students ability to push code to the `main` branch without review. This is to avoid broken code, publishing secrets, adding empty files, conflicts, and inappropriate contributions.

> Note: This means that developers cannot push to the `main` branch and that developers will need to develop on a separate branch and create a Pull Request. The information about Pull Request Workflow can be found in [CONTRIBUTING.md](./.github/CONTRIBUTING.md).

## Repository Access

You will need to add each HighTechU Student to the repository (OR alternatively add the appropriate team). You will initially give them read and write access.

> Note: One person on each team (the SCRUM Master) will need admin access.

For more information about repository access for individuals, visit "[Managing an individual's access to an organization repository](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository#managing-an-individuals-access-to-an-organization-repository)".

For more information about repository access for teams, visit "[Managing team access to an organization repository](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

Please make sure that the rest of the HTU mentors have access to the team repos.

## Deployment to Firebase

Please follow the steps outlined on the *Deployment* section of [`GETTING_STARTED.md`](GETTING_STARTED.md).

## Conclusion

The repository should now be ready for HighTechU Students to start developing and exploring.

## Support

The core staff are able to help with the set up, let us know if you need any help or assistance.

Feel free to update this document with any relevant or additional information.