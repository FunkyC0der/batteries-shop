import Link from "next/link";

type CatalogPaginationProps = {
  currentPage: number;
  getPageHref: (page: number) => string;
  onPageChange: (page: number) => void;
  totalPages: number;
};

function getVisiblePages(currentPage: number, totalPages: number) {
  const pages = new Set([1, totalPages]);
  for (let page = currentPage - 1; page <= currentPage + 1; page += 1) {
    if (page > 1 && page < totalPages) {
      pages.add(page);
    }
  }
  return [...pages].sort((first, second) => first - second);
}

export function CatalogPagination({
  currentPage,
  getPageHref,
  onPageChange,
  totalPages,
}: CatalogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getVisiblePages(currentPage, totalPages);
  const linkClass =
    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary";

  function pageLink(page: number, label: string, rel?: "prev" | "next") {
    return (
      <Link
        aria-label={label}
        className={linkClass}
        href={getPageHref(page)}
        key={label}
        onNavigate={(event) => {
          event.preventDefault();
          onPageChange(page);
        }}
        rel={rel}
        scroll={false}
      >
        {rel === "prev" ? "← Назад" : rel === "next" ? "Далі →" : page}
      </Link>
    );
  }

  return (
    <nav
      aria-label="Сторінки товарів"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1
        ? pageLink(currentPage - 1, "Попередня сторінка", "prev")
        : null}

      {pages.map((page, index) => (
        <span className="contents" key={page}>
          {index > 0 && page - pages[index - 1] > 1 ? (
            <span aria-hidden="true" className="px-1 text-muted-foreground">
              …
            </span>
          ) : null}
          {page === currentPage ? (
            <span
              aria-current="page"
              aria-label={`Сторінка ${page}, поточна`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground"
            >
              {page}
            </span>
          ) : (
            pageLink(page, `Сторінка ${page}`)
          )}
        </span>
      ))}

      {currentPage < totalPages
        ? pageLink(currentPage + 1, "Наступна сторінка", "next")
        : null}
    </nav>
  );
}
