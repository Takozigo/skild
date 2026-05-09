import { Link } from "@tanstack/react-router";
import {
	ArrowBigUpIcon,
	ArrowUpRightIcon,
	BookmarkIcon,
	CheckIcon,
	CopyIcon,
	MessageSquareIcon,
} from "lucide-react";
import { useState } from "react";

const SkillCard = ({
	authorEmail,
	category,
	createdAt,
	description,
	installCommand,
	tags,
	title,
}: SkillRecord) => {
	const [copied, setCopied] = useState(false);

	const handleCopyCommand = async () => {
		try {
			await navigator.clipboard.writeText(installCommand);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<article className="skill-card">
			<Link
				to="/skills"
				tabIndex={-1}
				aria-label={`Open ${title} skill`}
				className="overlay"
			/>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red" />
						<div className="light amber" />
						<div className="light green" />
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>

			<div className="body">
				<div className="meta">
					<div className="author">
						<img src="/logo512.png" alt="author avatar" className="avatar" />
						<div className="author-copy">
							<p>Adrian</p>
							<p>{new Date(createdAt as string).toLocaleDateString()}</p>
						</div>
					</div>
					<p className="category">{category}</p>
				</div>

				<div className="summary">
					<Link to="/skills" className="title-link">
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>

				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommand}</p>
					</div>
					<button
						type="button"
						className="copy"
						onClick={handleCopyCommand}
						title={copied ? "Copied!" : "Copy command"}
						aria-label="Copy command to clipboard"
					>
						{copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
					</button>
				</div>

				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUpIcon size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquareIcon size={14} />
							<span>{authorEmail ? 1 : 0}</span>
						</div>
					</div>
					<div className="actions">
						<Link to="skills" className="open" aria-label={`Open ${title}`}>
							<span>Open</span>
							<ArrowUpRightIcon size={14} />
						</Link>
						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<BookmarkIcon size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
